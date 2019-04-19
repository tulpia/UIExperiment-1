import Smooth from 'smooth-scrolling';
import { TimelineLite, Expo, TweenLite } from 'gsap';
import SplitText from '@js/SplitText.js';
import scrollmonitor from 'scrollmonitor';

const section = document.querySelector('.vs-section');

const scroll = new Smooth({
  section: section,
  native: true,
  preload: true,
  ease: 0.05
});

scroll.init();

const splitTextContainer = [];

document.addEventListener('DOMContentLoaded', () => {
  // -----
  // Header
  // -----

  const headerContainer = document.querySelector('.menu-container');
  const headerBtn = document.querySelector('.menu-container__btn-menu');
  const headerWhatTitle = document.querySelector(
    '.explanation-container__title p'
  );
  const headerWhat = new SplitText(
    document.querySelector('.explanation-container__text'),
    {
      type: 'lines'
    }
  );
  const headerTechTitle = document.querySelector(
    '.tech-used .title-container .title'
  );
  const headerTechList = document.querySelectorAll('.tech-used .tech-list');
  const headerGraphismTitle = document.querySelector(
    '.graphism-used .title-container .title'
  );
  const headerGraphismList = document.querySelectorAll(
    '.graphism-used .tech-list'
  );

  let headerFlag = true;

  let tlHeader = new TimelineLite({
    paused: true,
    onReverseComplete: onReverse
  });

  function onReverse() {
    headerContainer.classList.remove('active');
  }

  tlHeader
    .from(headerWhatTitle, 0.6, {
      y: 30
    })
    .staggerFrom(
      headerWhat.lines,
      1.2,
      {
        y: 60,
        opacity: 0
      },
      0.08,
      '-=0.6'
    )
    .from(
      headerTechTitle,
      0.6,
      {
        y: 30
      },
      '-=1'
    )
    .staggerFrom(
      headerTechList,
      0.8,
      {
        y: 20,
        opacity: 0
      },
      0.1,
      '-=0.5'
    )
    .from(
      headerGraphismTitle,
      0.6,
      {
        y: 30
      },
      '-=1.2'
    )
    .staggerFrom(
      headerGraphismList,
      0.8,
      {
        y: 20,
        opacity: 0
      },
      0.1,
      '-=0.8'
    );

  headerBtn.addEventListener('click', () => {
    if (headerFlag) {
      headerContainer.classList.add('active');
      setTimeout(() => {
        tlHeader.play().timeScale(1);
      }, 450);
      headerFlag = false;
    } else {
      tlHeader.reverse().timeScale(2.5);
      headerFlag = true;
    }
  });

  // -----
  // Night mode
  // -----

  const allContainer = document.querySelectorAll('.toggle-class');
  const btnToggle = document.querySelector('.logo__text');

  btnToggle.addEventListener('click', () => {
    for (let container of allContainer) {
      container.classList.toggle('night');
    }
  });

  let numberDecide = Math.floor(Math.random() * Math.floor(2));

  if (numberDecide === 1) {
    for (let container of allContainer) {
      container.classList.add('night');
    }
  }

  // -----
  // Animations
  // -----

  const blockHome = document.querySelector('.block-home');
  const homeTitle = blockHome.querySelectorAll('.title-container p');
  const homeImage = blockHome.querySelector('.block-home__img-container');

  let tlHome = new TimelineLite({
    paused: true
  });

  if (window.innerWidth > 900) {
    tlHome
      .staggerFrom(
        homeTitle,
        1,
        {
          y: 80
        },
        0.1
      )
      .from(
        homeImage,
        0.6,
        {
          y: 20,
          opacity: 0
        },
        '-=0.4'
      );
  } else {
    tlHome
      .staggerFrom(
        homeTitle,
        1,
        {
          y: 80,
          opacity: 0
        },
        0.1
      )
      .from(
        homeImage,
        0.6,
        {
          y: 20,
          opacity: 0
        },
        '-=0.4'
      );
  }

  setTimeout(() => {
    tlHome.play();
  }, 800);

  // block Introduction
  const blockIntroduction = document.querySelector('.block-introduction');
  const blockIntroductionWatcher = scrollmonitor.create(
    blockIntroduction,
    -300
  );
  const blockIntroductionText1 = new SplitText(
    blockIntroduction.querySelector('.text-1 p'),
    {
      type: 'lines'
    }
  );
  splitTextContainer.push(blockIntroductionText1);
  const blockIntroductionText2 = new SplitText(
    blockIntroduction.querySelector('.text-2 p'),
    {
      type: 'lines'
    }
  );
  splitTextContainer.push(blockIntroductionText2);

  let tlIntro = new TimelineLite({
    paused: true
  });

  tlIntro
    .staggerFrom(
      blockIntroductionText1.lines,
      0.8,
      {
        y: 40,
        opacity: 0
      },
      0.08
    )
    .staggerFrom(
      blockIntroductionText2.lines,
      0.8,
      {
        y: 40,
        opacity: 0
      },
      0.08,
      '-=0.6'
    );

  blockIntroductionWatcher.enterViewport(function() {
    tlIntro.play();
  });

  const blockImages = document.querySelector('.block-images');
  const blockImage1 = document.querySelector('.img1');
  const blockImagesWatcher1 = scrollmonitor.create(blockImage1, -400);

  let tlImg1 = new TimelineLite({
    paused: true
  });

  tlImg1.from(blockImage1, 1.2, {
    y: 60,
    opacity: 0
  });

  blockImagesWatcher1.enterViewport(() => {
    tlImg1.play();
  });

  const blockImage2 = document.querySelector('.img2');
  const blockImagesWatcher2 = scrollmonitor.create(blockImage2, -500);

  let tlImg2 = new TimelineLite({
    paused: true
  });

  tlImg2.from(blockImage2, 1.2, {
    y: 60,
    opacity: 0
  });

  blockImagesWatcher2.enterViewport(() => {
    tlImg2.play();
  });

  const blockImage3 = document.querySelector('.img3');
  const blockImagesWatcher3 = scrollmonitor.create(blockImage3, -500);

  let tlImg3 = new TimelineLite({
    paused: true
  });

  tlImg3.from(blockImage3, 1.2, {
    y: 60,
    opacity: 0
  });

  blockImagesWatcher3.enterViewport(() => {
    tlImg3.play();
  });

  const blockImage4 = document.querySelector('.img4');
  const blockImageWatcher4 = scrollmonitor.create(blockImage4, -500);

  let tlImg4 = new TimelineLite({
    paused: true
  });

  tlImg4.from(blockImage4, 1.2, {
    y: 60,
    opacity: 0
  });

  blockImageWatcher4.enterViewport(() => {
    tlImg4.play();
  });

  // -----
  // Resize
  // -----
  let resizeFlag = true;
  if (resizeFlag) {
    window.addEventListener('resize', () => {
      for (let resize of splitTextContainer) {
        resize.revert();
      }
      resizeFlag = false;
    });
  }
});
