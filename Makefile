compile:
	        coffee -b -o pkg -c src/movable.coffee
	        coffee -b -o pkg -c src/fadable.coffee
	        coffee -b -o pkg -c src/rotatable.coffee
	        cat pkg/movable.js pkg/fadable.js pkg/rotatable.js > pkg/scrollable.js

minify:
	        java -jar compiler.jar --js pkg/movable.js --js_output_file pkg/movable.min.js
	        java -jar compiler.jar --js pkg/fadable.js --js_output_file pkg/fadable.min.js
	        java -jar compiler.jar --js pkg/rotatable.js --js_output_file pkg/rotatable.min.js
	        java -jar compiler.jar --js pkg/scrollable.js --js_output_file pkg/scrollable.min.js

test:
	        make compile
	        node tests/server.js & phantomjs tests/phantom.js "http://localhost:3000/tests/index.html"
	        kill -9 `cat tests/pid.txt`
	        rm tests/pid.txt
