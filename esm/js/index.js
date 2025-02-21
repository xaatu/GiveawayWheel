import { Wheel } from '../../dist/spin-wheel-esm.js';

window.onload = () => {
  const props = {
    items: [
      { label: 'testname1', backgroundColor: '#CCFFE5', textColor: '#ffffff' },
      { label: 'testname2', backgroundColor: '#E5CCFF', textColor: '#ffffff' },
      { label: 'testname3', backgroundColor: '#CCFFE5', textColor: '#ffffff' },
      { label: 'testname4', backgroundColor: '#E5CCFF', textColor: '#ffffff' },
      { label: 'testname5', backgroundColor: '#CCFFE5', textColor: '#ffffff' },
      { label: 'testname6', backgroundColor: '#E5CCFF', textColor: '#ffffff' },
      { label: 'testname7', backgroundColor: '#CCFFE5', textColor: '#ffffff' },
      { label: 'testname8', backgroundColor: '#E5CCFF', textColor: '#ffffff' },



    
    ],
  };

  const container = document.querySelector('.wheel-wrapper');

  // ARROW
  const arrow = document.createElement('div');
  arrow.className = 'wheel-arrow';
  container.appendChild(arrow);

  window.wheel = new Wheel(container, props);
};