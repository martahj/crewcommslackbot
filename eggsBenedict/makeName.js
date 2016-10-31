import firstnames from './firstnames';
import lastnames from './lastnames';
import getRandomInt from '../lib/getRandomInt';
import uncapitalizeWord from '../lib/uncapitalizeWord';
import capitalizeWord from '../lib/capitalizeWord';

const makeName = () => {
  const firstnameMax = firstnames.length;
  const lastnameMax = lastnames.length;

  const firstname = firstnames[getRandomInt(0, firstnameMax)];
  const lastname = lastnames[getRandomInt(0,  lastnameMax)];

  const allLower = !!getRandomInt(0, 2);
  const transform = allLower ? uncapitalizeWord : capitalizeWord;

  return [firstname, lastname].map(w => transform(w)).join(' ');
}
export default makeName;
