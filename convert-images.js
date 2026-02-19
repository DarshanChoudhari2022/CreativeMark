#!/usr/bin/env node
/**
 * Image Optimization Script
 * Converts PNG/JPG images to WebP format using imagemin
 * 
 * Usage: npm install -g imagemin imagemin-webp
 * node convert-images.js
 */
import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const QUALITY = 78; // Balance between quality and file size
const SOURCE_DIR = './src/assets';
const OUTPUT_DIR = './src/assets';

// List of images to convert
const imagesToConvert = [
  'about-culture.png',
  'bjp_logo.png',
  'client_dom.png',
  'client_happiness_forever.jpg',
  'client_metacraft_new.png',
  'client_mikes_place.jpg',
  'client_modern_chinese.png',
  'client_pg_momo_wala.png',
  'client_poonawala.png',
  'client_rangeelo_rajasthan.jpg',
  'client_silk_route.jpg',
  'client_tsp.jpg',
  'disha_astrology.png',
  'galaxy_path_lab.png',
  'key_stylish_interiors.png',
];

// Main conversion function
async function convertImagesToWebP() {
  try {
    console.log('Starting image optimization...');
    console.log(`Source directory: ${SOURCE_DIR}`);
    console.log(`Output directory: ${OUTPUT_DIR}`);
    console.log(`Quality setting: ${QUALITY}`);
    console.log(`Total images to convert: ${imagesToConvert.length}`);

    // Create output directory if it doesn't exist
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    // Process each image
    for (const imageName of imagesToConvert) {
      const inputPath = path.join(SOURCE_DIR, imageName);
      const outputFileName = imageName.replace(/\.(png|jpg|jpeg)$/i, '.webp');
      const outputPath = path.join(OUTPUT_DIR, outputFileName);

      if (!fs.existsSync(inputPath)) {
        console.warn(`Skipping ${imageName}: File not found`);
        continue;
      }

      console.log(`Converting ${imageName} to ${outputFileName}...`);

      try {
        await imagemin([inputPath], {
          destination: OUTPUT_DIR,
          plugins: [imageminWebp({ quality: QUALITY })]
        });

        // Check if conversion was successful
        if (fs.existsSync(outputPath)) {
          const inputSize = fs.statSync(inputPath).size;
          const outputSize = fs.statSync(outputPath).size;
          const savings = Math.round((1 - outputSize / inputSize) * 100);
          console.log(`✓ ${imageName} → ${outputFileName} (Size reduction: ${savings}%)`);
        } else {
          console.error(`✗ Failed to convert ${imageName}`);
        }
      } catch (err) {
        console.error(`Error converting ${imageName}:`, err.message);
      }
    }

    console.log('\nImage optimization complete!');
  } catch (error) {
    console.error('Fatal error during image optimization:', error);
    process.exit(1);
  }
}

// Run the conversion
convertImagesToWebP();
