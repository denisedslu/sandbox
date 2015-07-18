from datadoc import datadoc as doc
import json

# Returns a python dictionary
test = doc.fetchData('14f5N7bbyDQR-1koi6D61s00qgZTdkTxXgUKTzjBWbQo')

# Open new datafile and dump in the json
with open('../public/data/data.json','wb') as dataFile:
	dataFile.write(json.dumps(test))