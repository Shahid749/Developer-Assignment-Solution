const mongoose = require('mongoose');
const University = require('./models/University');
const Bank = require('./models/Bank');

const universities = [
  { name: 'Harvard University', country: 'USA' },
  { name: 'Stanford University', country: 'USA' },
  { name: 'Massachusetts Institute of Technology (MIT)', country: 'USA' },
  { name: 'University of California, Berkeley', country: 'USA' },
  { name: 'Princeton University', country: 'USA' },
  { name: 'Columbia University', country: 'USA' },
  { name: 'Yale University', country: 'USA' },
  { name: 'University of Chicago', country: 'USA' },
  { name: 'University of Pennsylvania', country: 'USA' },
  { name: 'California Institute of Technology', country: 'USA' },
  { name: 'Monash University', country: 'Australia' },
  { name: 'UNSW', country: 'Australia' },
  { name: 'TU Munich', country: 'Germany' },
  { name: 'University of Europe for Applied Sciences', country: 'Germany' },
  { name: 'NUS', country: 'Singapore' },
  { name: 'University of Toronto', country: 'Canada' },
  { name: 'Brock University', country: 'Canada' },
  { name: 'Kingston University', country: 'UK' },
  { name: 'University of Leeds', country: 'UK' },
  { name: 'Trinity College Dublin', country: 'Ireland' }
];

const banks = [
  { name: 'State Bank of India (SBI)' },
  { name: 'Credila' },
  { name: 'Avanse' },
  { name: 'ICICI Bank' },
  { name: 'Axis Bank' },
  { name: 'Union Bank of India' },
  { name: 'Mpower Financing' }
];

async function seedData() {
  try {
    await University.deleteMany({});
    await Bank.deleteMany({});
    
    await University.insertMany(universities);
    await Bank.insertMany(banks);
    
    console.log('Data seeded successfully');
  } catch (error) {
    console.error('Error seeding data:', error);
  }
}

module.exports = seedData;