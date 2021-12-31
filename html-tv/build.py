import csv
import codecs
import jinja2
import codecs

with codecs.open('./data.csv', 'r', encoding='utf-8') as theFile:
    reader = csv.DictReader(theFile)
    data = list(reader)

for d in data:
    d['dollarfill'] = '';
    for s in d['album']:
        if (s == ' ') or (s == '-'):
            d['dollarfill']+=' '
        else:
            d['dollarfill']+='$'
    d['dollarfill']+=' '
    d['dollarfill']+='$'
    for s in d['year']:
        d['dollarfill']+='$'
    d['dollarfill']+='$'

env = jinja2.Environment(
    loader=jinja2.FileSystemLoader('templates'),
    variable_start_string='{{--',
    variable_end_string='--}}',
    trim_blocks=True,
    lstrip_blocks=True
)

index = env.get_template('index.html')
code_unit = env.get_template('code_unit.html').render(data=data)

result = index.render(
    code=code_unit
)

with codecs.open('./index.html','w','utf-8') as file:
    file.write(result)