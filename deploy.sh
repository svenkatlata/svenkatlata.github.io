#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Enable extended globbing
shopt -s extglob

echo "🚀 Building the Vite React App..."
cd frontend
npm run build

echo "🧹 Cleaning up old files..."
cd ..
rm -rf !(frontend|.git|deploy.sh)  # Keep frontend folder, .git, and deploy.sh

echo "📂 Moving new build files to root..."
mv frontend/dist/* .

echo "📌 Committing and pushing changes to GitHub..."
git add .
git commit -m "🚀 Deploy updated site"
git push origin main

echo "🎉 Deployment complete! Check your site at: https://svenkatlata.github.io/"
