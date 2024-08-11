#!/bin/sh
reponame="$1"
description="$2"
token="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"
if [ "$reponame" = "" ]; then
read -p "Enter Github Repository Name: " reponame
fi
mkdir ./$reponame
cd $reponame
curl -L \
  -X POST \
  -H "Accept: application/vnd.github+json" \
  -H "Authorization: Bearer $token" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  https://api.github.com/user/repos \
  -d '{\"name\":\"${reponame}\",\"description\":\"${description}\","homepage":"https://github.com","private":false,"is_template":true}'
git init
echo "ADD README CONTENT" > README.md
git add README.md
git commit -m "Create New Repository"
git remote add origin git@github.com:kbgarcia/$reponame.git
git push -u origin master