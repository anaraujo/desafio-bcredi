console.error("SyntaxError: Can't walk dependency graph: {\n\t\"name\": \"desafio-bcredi\",\n\t\"version\": \"1.0.0\",\n\t\"description\": \"\",\n\t\"main\": \"index.js\",\n\t\"engines\": {\n\t\t\"node\": \"12.18.3\",\n\t\t\"npm\": \"6.14.6\"\n\t},\n\t\"scripts\": {\n\t\t\"build-css\": \"node-sass --include-path scss public/stylesheets/main.scss public/stylesheets/main.css\",\n\t\t\"watch-css\": \"nodemon -e scss -x 'npm run build-css'\",\n\t\t\"watch-code\": \"nodemon index.js & watchify public/scripts/main.js -o public/scripts/bundle.js -v\",\n\t\t\"start\": \"npm install & npm run watch-code & npm run watch-css\",\n\t\t\"test\": \"mocha\"\n\t},\n\t\"author\": \"\",\n\t\"license\": \"MIT\",\n\t\"devDependencies\": {\n\t\t\"mocha\": \"^8.1.3\",\n\t\t\"node-sass\": \"^4.14.1\",\n\t},\n\t\"dependencies\": {\n\t\t\"express\": \"^4.17.1\",\n\t\t\"express-validator\": \"^6.6.1\",\n\t\t\"jquery\": \"^3.5.1\",\n\t\t\"jquery-mask-plugin\": \"^1.14.16\",\n\t\t\"moment\": \"^2.29.1\",\n\t\t\"sass-autoprefixer\": \"^1.0.1\"\n\t}\n}\n : Unexpected token } in JSON at position 618\n    required by /Users/anaaraujo/Projects/desafio-bcredi/public/scripts/_fake.js");