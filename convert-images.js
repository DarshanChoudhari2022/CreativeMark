#!/usr/bin/env node

/**
 * Image Optimization Script
 * Converts PNG/JPG images to WebP format using imagemin
 * 
 * Usage: npm install -g imagemin imagemin-webp
 *        node convert-images.js
 */

const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');
const fs = require('fs');
const path = require('path');

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
  'logo-footer.PNG',
  'logo-full.png',
  'logo-icon.png',
  'logo-original.jpg',
  'magic-qr-product.png',
  'magic-qr-standee.jpg',
  'mikesplace.png',
  'ncp_logo.png',
  'pgmoma.png',
  'poonawala_travels.png',
  'project-branding.png',
  'project-digital.png',
  'project-multimedia.png',
  'rangoli-rajasthan.png',
  'real_bjp.jpg',
  'real_congress_final.png',
  'real_congress_new.png',
  'real_mns.jpg',
  'real_ncp.jpg',
  'real_shivsena.jpg',
  'real_shivsena_bow.jpg',
  'real_tutari.jpg',
  'service-advertising-new.jpg',
  'service-branding.png',
  'service-digital-new.jpg',
  'service-digital.png',
  'service-multimedia.png',
  'shwetas_nail_art.png',
  'surajit-garage-standee-hd.png',
  'tsp.png',
];

async function convertImages() {
  console.log('🎨 Starting image optimization...');
  console.log(`Quality setting: ${QUALITY}`);
  console.log(`Source: ${SOURCE_DIR}`);
  console.log(`Output: ${OUTPUT_DIR}\n`);

  let successCount = 0;
  let skipCount = 0;
  let errorCount = 0;

  for (const image of imagesToConvert) {
    const inputPath = path.join(SOURCE_DIR, image);
    const fileName = path.parse(image).name;
    const outputFileName = `${fileName}.webp`;

    // Check if file exists
    if (!fs.existsSync(inputPath)) {
      console.log(`⏭️  SKIP: ${image} (file not found)`);
      skipCount++;
      continue;
    }

    try {
      console.log(`⏳ Converting: ${image}...`);

      // Get original file size
      const originalSize = fs.statSync(inputPath).size;
      const originalSizeKB = (originalSize / 1024).toFixed(2);

      // Convert image
      await imagemin([inputPath], {
        destination: OUTPUT_DIR,
        plugins: [
          imageminWebp({ quality: QUALITY })
        ]
      });

      // Get new file size
      const outputPath = path.join(OUTPUT_DIR, outputFileName);
      const newSize = fs.statSync(outputPath).size;
      const newSizeKB = (newSize / 1024).toFixed(2);
      const reduction = ((1 - newSize / originalSize) * 100).toFixed(1);

      console.log(`✅ ${image} => ${outputFileName}`);
      console.log(`   Original: ${originalSizeKB}KB → Optimized: ${newSizeKB}KB (${reduction}% reduction)\n`);
      successCount++;
    } catch (error) {
      console.log(`❌ ERROR: ${image} - ${error.message}\n`);
      errorCount++;
    }
  }

  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 Conversion Summary');
  console.log('='.repeat(60));
  console.log(`✅ Successfully converted: ${successCount}`);
  console.log(`⏭️  Skipped (not found): ${skipCount}`);
  console.log(`❌ Errors: ${errorCount}`);
  console.log('='.repeat(60));
  console.log('\n✨ Optimization complete! Don\'t forget to:');
  console.log('1. Update image references in your components to use .webp files');
  console.log('2. Test images in browser before committing');
  console.log('3. Remove old PNG/JPG files (optional, keep for backup)');
  console.log('4. Run: git add src/assets/*.webp && git commit -m "optimize: convert images to WebP format"');
}

convertImages().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
