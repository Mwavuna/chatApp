#!/bin/bash
echo "Pushing to git repository..."

#handle git add,commit and push
git add . 
git commit -m "Another commit" 
git push 

#deploy frontend to gh pages
echo "Deploying frontend to production server..."
npm --prefix frontend run build #build the dist folder in the frontend directory
npx gh-pages -d frontend/dist -r htts://github.com/mwavuna/chatApp.git #push the dist folder in the frontend directory to the gh-pages branch of the repository

echo "Deployment complete!"

