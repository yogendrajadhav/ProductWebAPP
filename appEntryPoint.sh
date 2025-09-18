#!/bin/sh

TEMPLATE_PATH="/usr/share/nginx/html/assets/config/config.template.json"
OUTPUT_PATH="/usr/share/nginx/html/assets/config/config.json"

if [ -f "$TEMPLATE_PATH" ]; then
  echo "Generating config.json from template..."
  envsubst < "$TEMPLATE_PATH" > "$OUTPUT_PATH"
else
  echo "WARNING: $TEMPLATE_PATH not found. Skipping envsubst."
fi

exec nginx -g 'daemon off;'

