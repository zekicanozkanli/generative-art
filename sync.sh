#!/bin/zsh
export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"
cd "$(dirname "$0")"

find . -name ".DS_Store" -depth -exec rm {} \;

git add .

git pull --rebase origin main

if ! git diff-index --quiet HEAD; then
    git commit -m "Auto-Sync: last update: $(date '+%b/%d, %H:%M')"
    git push origin main
    # Success notification
    osascript -e 'display notification "Notes synced to GitHub" with title "Git Auto" subtitle "Success"'
fi
