import fs from 'fs';

import DepartmentResponse from '../expressions/department';
import DormsResponse from '../expressions/dorms';
import FacultyResponse from '../expressions/faculty';
import ScoreResponse from '../expressions/score';
import SpecialtyResponse from '../expressions/specialty';

const getData = (name) => {
  const lines = fs.readFileSync(`${__dirname}/../../data/expressions/${name}`, { encoding: 'utf8' }).split('\n');

  const data = {
    valid: [],
    invalid: [],
  };

  let shouldBeValid = true;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim().toLowerCase();

    if (line === '[valid]') {
      shouldBeValid = true;
      continue;
    } else if (line === '[invalid]') {
      shouldBeValid = false;
      continue;
    }

    data[shouldBeValid ? 'valid' : 'invalid'].push(line);
  }

  return data;
};

const expressions = [
  {
    response: new DepartmentResponse(),
    data: getData('department.dat'),
  },
  {
    response: new DormsResponse(),
    data: getData('dorms.dat'),
  },
  {
    response: new FacultyResponse(),
    data: getData('faculty.dat'),
  },
  {
    response: new ScoreResponse(),
    data: getData('score.dat'),
  },
  {
    response: new SpecialtyResponse(),
    data: getData('specialty.dat'),
  },
];

let allErrors = [];
for (let i = 0; i < expressions.length; i++) {
  const { response, data } = expressions[i];
  const { valid, invalid } = data;

  const errors = [];

  valid.forEach(l => {
    if (!response.match(l)) {
      errors.push(`Expected a response: ${l}`);
    }
  });

  invalid.forEach(l => {
    if (response.match(l)) {
      errors.push(`Did not expect a response: ${l}`);
    }
  });

  allErrors = allErrors.concat(errors.map(e => `[${response.goal}] ${e}`));
}

if (allErrors.length > 0) {
  console.error(allErrors.join('\n'));
  process.exit(1);
}
