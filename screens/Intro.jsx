import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { SvgXml } from 'react-native-svg';

const data = [
  {
    id: 1,
    title: 'Connect people around the world',
    img: `<svg id="Illustration" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="398" height="357" viewBox="0 0 398 357">
    <defs>
      <linearGradient id="linear-gradient" x1="0.5" y1="1" x2="0.5" gradientUnits="objectBoundingBox">
        <stop offset="0" stop-color="gray" stop-opacity="0.251"/>
        <stop offset="0.54" stop-color="gray" stop-opacity="0.122"/>
        <stop offset="1" stop-color="gray" stop-opacity="0.102"/>
      </linearGradient>
      <linearGradient id="linear-gradient-2" x1="0.5" x2="0.5" y2="0" xlink:href="#linear-gradient"/>
      <linearGradient id="linear-gradient-3" x1="0.265" y1="0.999" x2="0.265" y2="0" xlink:href="#linear-gradient"/>
      <linearGradient id="linear-gradient-4" x1="4.809" x2="4.809" y2="0" xlink:href="#linear-gradient"/>
      <linearGradient id="linear-gradient-5" x1="2.673" x2="2.673" y2="0" xlink:href="#linear-gradient"/>
      <linearGradient id="linear-gradient-6" x1="-1.777" x2="-1.777" y2="0" xlink:href="#linear-gradient"/>
      <linearGradient id="linear-gradient-7" x1="-4.099" x2="-4.099" y2="0" xlink:href="#linear-gradient"/>
      <linearGradient id="linear-gradient-8" x1="4.571" x2="4.571" y2="0" xlink:href="#linear-gradient"/>
      <linearGradient id="linear-gradient-9" x1="0.519" x2="0.519" y2="0" xlink:href="#linear-gradient"/>
      <linearGradient id="linear-gradient-10" x1="-13.888" x2="-13.888" y2="0" xlink:href="#linear-gradient"/>
      <linearGradient id="linear-gradient-11" x1="-25.652" x2="-25.652" y2="0" xlink:href="#linear-gradient"/>
      <linearGradient id="linear-gradient-12" x1="-2.218" x2="-2.218" y2="0" xlink:href="#linear-gradient"/>
      <linearGradient id="linear-gradient-13" x1="-2.274" x2="-2.274" y2="-0.001" xlink:href="#linear-gradient"/>
      <linearGradient id="linear-gradient-14" x1="-3.097" x2="-3.097" y2="0" xlink:href="#linear-gradient"/>
      <linearGradient id="linear-gradient-16" x1="-6.139" x2="-6.139" y2="0" xlink:href="#linear-gradient"/>
      <linearGradient id="linear-gradient-18" x1="0.498" x2="0.498" y2="0" xlink:href="#linear-gradient"/>
      <linearGradient id="linear-gradient-19" x1="15.076" x2="15.076" y2="0.001" xlink:href="#linear-gradient"/>
      <linearGradient id="linear-gradient-20" x1="14.78" y1="1.001" x2="14.78" y2="0.001" xlink:href="#linear-gradient"/>
    </defs>
    <path id="Shape" d="M.456,310.554a164.789,164.789,0,0,0,11.311,46.358L397.921,357,398,0,271.663.372s-49.586-5.694-100.42,34.539q-2.376,1.882-4.669,3.871a138.706,138.706,0,0,0-19.407,20.6,143.865,143.865,0,0,0-28.381,69.9c-2.452,19.914-8.666,45.225-23.791,66.2q-.792,1.074-1.584,2.14a92.5,92.5,0,0,1-44.754,32.114c-18.828,6.4-30.865,16.772-38.247,28.925C.69,274.581-1,293.552.456,310.554Z" fill="#f5f5f5" opacity="0.8"/>
    <g id="Illustration-2" data-name="Illustration" transform="translate(114 47)">
      <g id="undraw_login_jdch">
        <path id="Rectangle-path" d="M0,0H153.9V228.249H0Z" transform="translate(0 5.927)" fill="#e0b022"/>
        <path id="Shape-2" data-name="Shape" d="M111.958,240.061,0,234.155V5.906L111.958,0V240.061Z" transform="translate(0 0.021)" fill="#ffc107"/>
        <path id="Oval" d="M1.386,0A1.39,1.39,0,1,1,0,1.39,1.388,1.388,0,0,1,1.386,0Z" transform="translate(101.213 129.605)" fill="#252a62"/>
        <path id="Shape-3" data-name="Shape" d="M1.924,0l.96,1.668.964,1.668H0L.964,1.668,1.924,0Z" transform="translate(100.676 131.203)" fill="#252a62"/>
        <path id="Shape-4" data-name="Shape" d="M6.856,240.061,0,240.04.27,0H6.856V240.061Z" transform="translate(109.955 0.021)" fill="#ffc107"/>
        <g id="Group" transform="translate(109.879)" opacity="0.1">
          <path id="Shape-5" data-name="Shape" d="M6.932,240.061H0L.347,0H6.932V240.061Z" transform="translate(0.076)" fill="#fff"/>
        </g>
        <path id="Oval-2" data-name="Oval" d="M4.506,0A4.516,4.516,0,1,1,0,4.516,4.511,4.511,0,0,1,4.506,0Z" transform="translate(98.094 116.404)" opacity="0.1"/>
        <path id="Oval-3" data-name="Oval" d="M4.506,0A4.516,4.516,0,1,1,0,4.516,4.511,4.511,0,0,1,4.506,0Z" transform="translate(98.094 115.709)" fill="#252a62"/>
        <path id="Shape-6" data-name="Shape" d="M10.351,28.717V31.2l10.489-6.636-1.1-1.39-.513.3L11.11,11.566V4.652L8.021,4.93v-1.1c-8.146-9.4-8.988,1.1-7.3,4.148A18.689,18.689,0,0,0,5.484,13.24c1.733,1.449,4.721,12.392,5.452,15.137Z" transform="translate(109.566 39.914)" fill="url(#linear-gradient)"/>
        <path id="Shape-7" data-name="Shape" d="M46.724,229.724l-10.4,3.2s-11.428-1.977-4.742-4.7c4.988-2.036,6.229-4.94,6.538-6.285L21.785,174.857s3.036-40.1,14.076-53.953l1.12-8.15h-.153l-2.343-47.6-.194.024.056.017a52.589,52.589,0,0,1-18.208-.281,28.288,28.288,0,0,1-5.272-1.48l-.312-.125h-.069A15.965,15.965,0,0,1,6.9,61.264L0,50.706l10.481-7.24L14.063,48.6s11.234-2.383,17.4-4.867a26.291,26.291,0,0,1,9.047-1.942l6.738-.222,3.359-2.022-1.04-2.716c-.1-.049-.208-.1-.309-.153l-.1-.584a16.132,16.132,0,0,1-11.74-19.531h-.219c.094-5.618,1.8-6.146,1.8-6.146C39.009,4.72,43.972.55,49.632.068a28.053,28.053,0,0,1,8.725.764A10.164,10.164,0,0,1,66.114,9.67c7.376,2.015,4.912,5.892,5.03,7.39.568,7.236-1.733,11.516-4.257,14.011a13.3,13.3,0,0,1-3.726,2.74l1.616,3.235.472-.017,1.3,3.87h.062l1.432.973a27.042,27.042,0,0,1,11.4,27.223s-8,15.7-5.518,31.385c.835,5.274.485,8.5-.346,10.461a19.25,19.25,0,0,0,1.732,6.128c3.033,6.361,3.033,13-.828,20.737l-1.1,40.091s-1.38,18.8,0,22.672-.551,22.395-.551,22.395H73.1V233.2l-20.69.552S47.584,231.461,46.724,229.724Z" transform="translate(119.924 21.232)" fill="url(#linear-gradient-2)"/>
        <path id="Shape-8" data-name="Shape" d="M10.676,4.464v6.653l7.893,11.59-7.893,5.145S7.169,14.3,5.279,12.708A17.813,17.813,0,0,1,.69,7.66C-.929,4.738-.121-5.357,7.709,3.675V4.738Z" transform="translate(111.324 43.774)" fill="#fda57d"/>
        <path id="Shape-9" data-name="Shape" d="M17.163,7.513l-3.12-6.253A1.158,1.158,0,0,0,13.066.62L1.218,0A1.16,1.16,0,0,0,.078,1.579L3.139,9.51a1.158,1.158,0,0,0,1.182.737L16.251,9.184a1.161,1.161,0,0,0,.912-1.671Z" transform="translate(167.662 56.564)" fill="#fda57d"/>
        <path id="Shape-10" data-name="Shape" d="M18.686,0,20.7,5.923,0,5.18,7.951.4,18.686,0Z" transform="translate(165.276 61.388)" fill="#fff"/>
        <path id="Shape-11" data-name="Shape" d="M10.073,1.327,9.012,0,0,5.312V7.706L10.073,1.327Z" transform="translate(121.276 66.036)" fill="#edeef9"/>
        <path id="Shape-12" data-name="Shape" d="M50.028,0a19.844,19.844,0,0,0,1.386,12.159c2.9,6.111,2.915,12.486-.794,19.924L49.57,70.6s-1.324,18.065,0,21.783-.53,21.519-.53,21.519H34.2V101.955L29.161,66.623V48.558L20.149,67.419l10.333,43.569-13.518,5.579L0,67.686s2.915-38.521,13.518-51.8L15.508,1.4Z" transform="translate(142.211 126.135)" fill="#252a62"/>
        <path id="Shape-13" data-name="Shape" d="M25.469,9.828V0H10.36S9.3,3.985,2.408,4.78,5.6,10.36,5.6,10.36Z" transform="translate(166.049 240.044)" fill="#333"/>
        <path id="Shape-14" data-name="Shape" d="M25.587,9.47,22.956,0,8.4,4.061S8.443,8.185,2.017,10.8s4.558,4.516,4.558,4.516Z" transform="translate(149.612 234.284)" fill="#333"/>
        <path id="Shape-15" data-name="Shape" d="M.912,1.39,35.428,0a19.4,19.4,0,0,0-.26,6.271,4.135,4.135,0,0,1-4.967,2.7L0,8.043Z" transform="translate(156.811 126.944)" opacity="0.1"/>
        <path id="Shape-16" data-name="Shape" d="M64,0l1.386.935a25.981,25.981,0,0,1,10.95,26.171h0s-7.688,15.074-5.3,30.148-5.3,12.753-5.3,12.753l-30.35-.935L33.133,23.336S14.846,25.945,6.627,19.566L0,9.422,10.073,2.474,13.518,7.4S24.312,5.114,30.239,2.706A25.278,25.278,0,0,1,38.925.834Z" transform="translate(121.289 65.105)" fill="#3ad29f"/>
        <path id="Shape-17" data-name="Shape" d="M8.745,0S10.6,9.3,0,24.708" transform="translate(176.277 138.694)" opacity="0.1"/>
        <path id="Shape-18" data-name="Shape" d="M22.984,4.249S10.263,0,4.7,0,.058,2.411.058,2.411,8.935,6.372,22.984,4.249Z" transform="translate(131.294 84.237)" opacity="0.1"/>
        <path id="Shape-19" data-name="Shape" d="M.52,0,5.584.609c.159.021.305.222.392.535C4.863,3.156,3.47,4.358,1.959,4.358A3.114,3.114,0,0,1,.423,3.931L.035,1.582C-.1.8.163-.04.52,0Z" transform="translate(168.184 57.096)" opacity="0.1"/>
        <path id="Oval-4" data-name="Oval" d="M15.459,0A15.495,15.495,0,1,1,0,15.495,15.477,15.477,0,0,1,15.459,0Z" transform="translate(156.776 29.929)" fill="#fda57d"/>
        <path id="Shape-20" data-name="Shape" d="M0,10.587H0l.78.716a2.682,2.682,0,0,1,.828,2.44A2.677,2.677,0,0,1,0,15.753H0s6.932,6.948,7.889,8.23-.159,4.68-.159,4.68S4.669,34.312,20.773,33.02c0,0,10.627-2.258,9.5-16.624-.114-1.438,2.253-5.166-4.832-7.1h0A9.765,9.765,0,0,0,17.99.8,26.977,26.977,0,0,0,9.608.064,10.538,10.538,0,0,0,0,10.587Z" transform="translate(159.088 26.065)" opacity="0.1"/>
        <path id="Shape-21" data-name="Shape" d="M1.733,10h0S.094,10.511,0,15.91l2.333-.16s5.4,14.477,4.832,12.59c-2.08-6.948,2.08-5.649,3.061-4.357s-.159,4.68-.159,4.68S7.009,34.3,23.109,33.02c0,0,10.627-2.258,9.5-16.624-.114-1.438,2.253-5.166-4.832-7.1h0A9.765,9.765,0,0,0,20.326.8,26.977,26.977,0,0,0,11.945.064C6.5.53,1.733,4.532,1.733,10Z" transform="translate(157.019 25.801)" fill="#252a62"/>
        <path id="Shape-22" data-name="Shape" d="M0,0V229.656" transform="translate(18.308 5.597)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="0.693" opacity="0.1"/>
        <path id="Shape-23" data-name="Shape" d="M0,0V231.741" transform="translate(38.066 4.207)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="0.693" opacity="0.1"/>
        <path id="Shape-24" data-name="Shape" d="M0,0V234.117" transform="translate(57.823 3.165)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="0.693" opacity="0.1"/>
        <path id="Shape-25" data-name="Shape" d="M0,0V236.6" transform="translate(77.581 2.123)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="0.693" opacity="0.1"/>
        <path id="Shape-26" data-name="Shape" d="M0,0V237.939" transform="translate(97.338 1.08)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="0.693" opacity="0.1"/>
      </g>
    </g>
    <g id="Group_2" data-name="Group 2" transform="translate(140 250)">
      <g id="Group-2" data-name="Group" transform="translate(-0.588 0.325)" opacity="0.5">
        <path id="Shape-27" data-name="Shape" d="M0,13.787a9.446,9.446,0,0,1-9.523,9.165h-.714a2.41,2.41,0,0,0-1.688.682,2.347,2.347,0,0,0-.686,1.2,2.235,2.235,0,0,0-.072.567v9.031a9.041,9.041,0,0,1-1.435,4.9A12.93,12.93,0,0,0-16.253,46.3h0a4.356,4.356,0,0,1-1.305,3.109,4.371,4.371,0,0,1-3.137,1.25,4.451,4.451,0,0,1-4.277-4.494V43.9l-1.188.137V46.3a4.356,4.356,0,0,1-1.305,3.109,4.371,4.371,0,0,1-3.137,1.25,4.451,4.451,0,0,1-4.277-4.494V45.028c-1.188.5-7.926.5-9.8.016l-.508-.04v1.311a4.356,4.356,0,0,1-1.305,3.109,4.371,4.371,0,0,1-3.137,1.25A4.451,4.451,0,0,1-53.9,46.18V44.311l-.4-.034v2.058a4.405,4.405,0,0,1-.134,1.081,4.366,4.366,0,0,1-4.308,3.273A4.433,4.433,0,0,1-62.978,46.8a5.133,5.133,0,0,1-.041-.623V36.7a14.468,14.468,0,0,1,3.088-8.962,2.681,2.681,0,0,0,.075-3.17c-2.221-3.245-5.5-8.719-5.393-12.6A4.253,4.253,0,0,1-64.21,9.091l.131-.137a4.866,4.866,0,0,1,8.335,3.886,12.856,12.856,0,0,0,.337,4.59,14.032,14.032,0,0,0,.892,2.46,4.181,4.181,0,0,0,4.277,2.373,14.8,14.8,0,0,1,1.787-.106h18.326a5.149,5.149,0,0,0,4.876-3.485,4.975,4.975,0,0,0,.278-1.657V2.77A2.769,2.769,0,0,1-24.128.782,2.779,2.779,0,0,1-22.111,0,2.7,2.7,0,0,1-20.2.892a2.974,2.974,0,0,1,.774,2,1.468,1.468,0,0,0,1.469,1.467h8.638A9.319,9.319,0,0,1-2.68,7.124,9.287,9.287,0,0,1,0,13.787Z" transform="translate(-1.003 0.133)" fill="url(#linear-gradient-3)"/>
        <path id="Shape-28" data-name="Shape" d="M0,1.254A4.366,4.366,0,0,1-4.308,4.527,4.433,4.433,0,0,1-8.544.641C-5.9-.069-2.243-.561,0,1.254Z" transform="translate(-55.44 46.254)" fill="url(#linear-gradient-4)"/>
        <path id="Shape-29" data-name="Shape" d="M0,1.254A4.366,4.366,0,0,1-4.308,4.527,4.433,4.433,0,0,1-8.553.641C-5.908-.069-2.249-.561,0,1.254Z" transform="translate(-46.322 46.254)" fill="url(#linear-gradient-5)"/>
        <path id="Shape-30" data-name="Shape" d="M0,1.254A4.366,4.366,0,0,1-4.308,4.527,4.433,4.433,0,0,1-8.55.641C-5.908-.069-2.249-.561,0,1.254Z" transform="translate(-27.298 46.254)" fill="url(#linear-gradient-6)"/>
        <path id="Shape-31" data-name="Shape" d="M0,1.254A4.366,4.366,0,0,1-4.308,4.527,4.433,4.433,0,0,1-8.544.641C-5.9-.069-2.237-.561,0,1.254Z" transform="translate(-17.39 46.254)" fill="url(#linear-gradient-7)"/>
        <path id="Shape-32" data-name="Shape" d="M0,9.97A63.619,63.619,0,0,1-9.838,4.514,4.253,4.253,0,0,1-8.8,1.64l.131-.137A4.864,4.864,0,0,1-.331,5.38,12.856,12.856,0,0,0,0,9.97Z" transform="translate(-56.417 7.593)" fill="url(#linear-gradient-8)"/>
        <path id="Shape-33" data-name="Shape" d="M-22.353.028S-13.872,10.684,0,0" transform="translate(-30.339 22.29)" fill="url(#linear-gradient-9)"/>
        <path id="Shape-34" data-name="Shape" d="M-2.29,0a13.447,13.447,0,0,1,0,15.038" transform="translate(-23.685 2.507)" fill="url(#linear-gradient-10)"/>
        <path id="Shape-35" data-name="Shape" d="M0,0S-4.539,5.63-.056,10.1" transform="translate(-13.7 25.458)" fill="url(#linear-gradient-11)"/>
        <g id="Group-3" data-name="Group" transform="translate(-13.101 18.996)" opacity="0.1">
          <path id="Shape-36" data-name="Shape" d="M0,5.07c-.337.311-.221.623-.312,1.084L-15.07,2.3A5.709,5.709,0,0,0-12.97,0C-11.192,1.37-7.7,3.665,0,5.07Z" transform="translate(-0.19 0.206)" fill="url(#linear-gradient-12)"/>
        </g>
        <path id="Shape-37" data-name="Shape" d="M0,4.954a2.347,2.347,0,0,0-.686,1.2L-15.035,2.413A5.11,5.11,0,0,0-13.307,0C-11.554,1.364-7.7,3.55,0,4.954Z" transform="translate(-12.93 18.809)" fill="url(#linear-gradient-13)"/>
        <path id="Shape-38" data-name="Shape" d="M-12.013,0A27.9,27.9,0,0,0,0,4.419" transform="translate(-13.7 19.597)" opacity="0.1" fill="url(#linear-gradient-14)"/>
        <path id="Shape-39" data-name="Shape" d="M-12.013,0A27.85,27.85,0,0,0,0,4.419" transform="translate(-13.7 19.201)" fill="url(#linear-gradient-14)"/>
        <g id="Group-4" data-name="Group" transform="translate(-4.679 14.325)" opacity="0.1">
          <path id="Shape-40" data-name="Shape" d="M-9.514,5.144S-1.984,7.517,0,0Z" transform="translate(-0.287 0.053)" fill="url(#linear-gradient-16)"/>
        </g>
        <path id="Shape-41" data-name="Shape" d="M-9.514,5.144S-1.984,7.517,0,0Z" transform="translate(-4.966 13.982)" fill="url(#linear-gradient-16)"/>
        <path id="Oval-5" data-name="Oval" d="M-.792,0c-.438,0-.792.62-.792,1.386s.355,1.386.792,1.386S0,2.151,0,1.386-.355,0-.792,0Z" transform="translate(-0.209 11.606)" fill="url(#linear-gradient-18)"/>
        <path id="Shape-42" data-name="Shape" d="M-1.585,12.677,0,0S-4.757,7.517-1.585,12.662" transform="translate(-59.467 28.805)" opacity="0.1" fill="url(#linear-gradient-19)"/>
        <path id="Shape-43" data-name="Shape" d="M0,0S-4.757,7.517-1.585,12.662Z" transform="translate(-59.071 28.805)" fill="url(#linear-gradient-20)"/>
      </g>
      <path id="Shape-44" data-name="Shape" d="M0,13.155A9.011,9.011,0,0,1-9.088,21.9h-.68a2.3,2.3,0,0,0-1.613.651,2.238,2.238,0,0,0-.655,1.14,2.133,2.133,0,0,0-.069.539v8.62a8.628,8.628,0,0,1-1.369,4.671,12.336,12.336,0,0,0-2.034,6.652h0a4.154,4.154,0,0,1-1.247,2.964,4.168,4.168,0,0,1-2.992,1.19,4.245,4.245,0,0,1-4.08-4.288V41.882l-1.135.131v2.161a4.154,4.154,0,0,1-1.247,2.964,4.168,4.168,0,0,1-2.992,1.19,4.245,4.245,0,0,1-4.08-4.288V42.95c-1.135.473-7.564.473-9.358,0l-.484-.037v1.246a4.154,4.154,0,0,1-1.247,2.964,4.168,4.168,0,0,1-2.992,1.19,4.245,4.245,0,0,1-4.08-4.288V42.231l-.377-.034v1.962a4.2,4.2,0,0,1-.128,1.031A4.166,4.166,0,0,1-56.059,48.3a4.23,4.23,0,0,1-4.055-3.709,4.9,4.9,0,0,1-.037-.582V34.982A13.805,13.805,0,0,1-57.2,26.437a2.556,2.556,0,0,0,.072-3.024c-2.118-3.1-5.25-8.321-5.147-12.027a4.044,4.044,0,0,1,.992-2.74l.125-.131a4.637,4.637,0,0,1,7.951,3.7,12.268,12.268,0,0,0,.312,4.378,13.376,13.376,0,0,0,.852,2.348,3.991,3.991,0,0,0,4.08,2.264,14.126,14.126,0,0,1,1.706-.1h17.5A4.915,4.915,0,0,0-24.1,17.776a4.757,4.757,0,0,0,.265-1.582V2.645a2.642,2.642,0,0,1,.8-1.9A2.651,2.651,0,0,1-21.11,0a2.578,2.578,0,0,1,1.828.85,2.837,2.837,0,0,1,.736,1.9,1.4,1.4,0,0,0,1.4,1.4H-8.9A8.891,8.891,0,0,1-2.561,6.795,8.861,8.861,0,0,1,0,13.155Z" transform="translate(-3.057 1.616)" fill="#f3ad55"/>
      <path id="Shape-45" data-name="Shape" d="M0,1.2A4.166,4.166,0,0,1-4.111,4.314,4.23,4.23,0,0,1-8.166.6C-5.634-.065-2.143-.535,0,1.2Z" transform="translate(-55.011 45.624)" fill="#f38143"/>
      <path id="Shape-46" data-name="Shape" d="M0,1.2A4.166,4.166,0,0,1-4.111,4.314,4.23,4.23,0,0,1-8.166.6C-5.637-.065-2.146-.535,0,1.2Z" transform="translate(-46.311 45.624)" fill="#f38143"/>
      <path id="Shape-47" data-name="Shape" d="M0,1.2A4.166,4.166,0,0,1-4.111,4.314,4.23,4.23,0,0,1-8.166.6C-5.637-.065-2.146-.535,0,1.2Z" transform="translate(-28.157 45.624)" fill="#f38143"/>
      <path id="Shape-48" data-name="Shape" d="M0,1.2A4.166,4.166,0,0,1-4.111,4.314,4.23,4.23,0,0,1-8.166.6C-5.637-.065-2.137-.535,0,1.2Z" transform="translate(-18.702 45.624)" fill="#f38143"/>
      <path id="Shape-49" data-name="Shape" d="M0,9.513A59.632,59.632,0,0,1-9.386,4.307a4.044,4.044,0,0,1,.992-2.74l.125-.131a4.637,4.637,0,0,1,7.951,3.7A12.268,12.268,0,0,0,0,9.513Z" transform="translate(-55.941 8.736)" fill="#f8dea5"/>
      <path id="Shape-50" data-name="Shape" d="M-21.33.025S-13.239,10.2,0,0" transform="translate(-31.054 22.761)" fill="#f8dea5"/>
      <path id="Shape-51" data-name="Shape" d="M-2.185,0a12.829,12.829,0,0,1,0,14.347" transform="translate(-24.708 3.884)" fill="#f8dea5"/>
      <path id="Shape-52" data-name="Shape" d="M0,0S-4.33,5.372-.053,9.654" transform="translate(-15.171 25.782)" fill="#f8dea5"/>
      <path id="Shape-53" data-name="Shape" d="M0,4.824c-.312.311-.212.592-.312,1.034L-14.374,2.18A5.465,5.465,0,0,0-12.368,0C-10.681,1.292-7.346,3.485,0,4.824Z" transform="translate(-14.793 19.825)" opacity="0.1"/>
      <path id="Shape-54" data-name="Shape" d="M0,4.733a2.238,2.238,0,0,0-.655,1.14L-14.362,2.3A4.874,4.874,0,0,0-12.711,0C-11.027,1.308-7.349,3.391,0,4.733Z" transform="translate(-14.447 19.432)" fill="#383f4d"/>
      <path id="Shape-55" data-name="Shape" d="M-11.473,0A26.6,26.6,0,0,0,0,4.216" transform="translate(-15.171 20.189)" opacity="0.1"/>
      <path id="Shape-56" data-name="Shape" d="M-11.473,0A26.6,26.6,0,0,0,0,4.216" transform="translate(-15.171 19.812)" fill="#f3ad55"/>
      <path id="Shape-57" data-name="Shape" d="M-9.077,4.908S-1.9,7.172,0,0Z" transform="translate(-4.665 16.455)" opacity="0.1"/>
      <path id="Shape-58" data-name="Shape" d="M-9.077,4.908S-1.9,7.172,0,0Z" transform="translate(-4.665 16.079)" fill="#f3ad55"/>
      <path id="Oval-6" data-name="Oval" d="M-.755,0c-.417,0-.755.591-.755,1.32s.338,1.32.755,1.32S0,2.05,0,1.32-.338,0-.755,0Z" transform="translate(-2.313 12.569)" fill="#383f4d"/>
      <path id="Shape-59" data-name="Shape" d="M-1.513,12.083,0,0S-4.539,7.162-1.513,12.083" transform="translate(-58.854 28.99)" opacity="0.1"/>
      <path id="Shape-60" data-name="Shape" d="M0,0S-4.539,7.162-1.513,12.083Z" transform="translate(-58.477 28.99)" fill="#f3ad55"/>
    </g>
  </svg>
  `,
  },
  {
    id: 2,
    title: 'Live your life smarter with us',
    img: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="399.567" height="358.602" viewBox="0 0 399.567 358.602">
    <defs>
      <linearGradient id="linear-gradient" x1="0.5" y1="1" x2="0.5" gradientUnits="objectBoundingBox">
        <stop offset="0" stop-color="gray" stop-opacity="0.251"/>
        <stop offset="0.54" stop-color="gray" stop-opacity="0.122"/>
        <stop offset="1" stop-color="gray" stop-opacity="0.102"/>
      </linearGradient>
      <linearGradient id="linear-gradient-2" x1="0.735" y1="0.999" x2="0.735" y2="0" xlink:href="#linear-gradient"/>
      <linearGradient id="linear-gradient-3" x1="-3.809" y1="1" x2="-3.809" y2="0" xlink:href="#linear-gradient"/>
      <linearGradient id="linear-gradient-4" x1="-1.673" y1="1" x2="-1.673" y2="0" xlink:href="#linear-gradient"/>
      <linearGradient id="linear-gradient-5" x1="2.777" y1="1" x2="2.777" y2="0" xlink:href="#linear-gradient"/>
      <linearGradient id="linear-gradient-6" x1="5.099" y1="1" x2="5.099" y2="0" xlink:href="#linear-gradient"/>
      <linearGradient id="linear-gradient-7" x1="-3.571" y1="1" x2="-3.571" y2="0" xlink:href="#linear-gradient"/>
      <linearGradient id="linear-gradient-8" x1="0.481" y1="1" x2="0.481" y2="0" xlink:href="#linear-gradient"/>
      <linearGradient id="linear-gradient-9" x1="14.888" y1="1" x2="14.888" y2="0" xlink:href="#linear-gradient"/>
      <linearGradient id="linear-gradient-10" x1="26.652" y1="1" x2="26.652" y2="0" xlink:href="#linear-gradient"/>
      <linearGradient id="linear-gradient-11" x1="3.218" y1="1" x2="3.218" y2="0" xlink:href="#linear-gradient"/>
      <linearGradient id="linear-gradient-12" x1="3.274" y1="1" x2="3.274" y2="-0.001" xlink:href="#linear-gradient"/>
      <linearGradient id="linear-gradient-13" x1="4.097" y1="1" x2="4.097" y2="0" xlink:href="#linear-gradient"/>
      <linearGradient id="linear-gradient-15" x1="7.139" y1="1" x2="7.139" y2="0" xlink:href="#linear-gradient"/>
      <linearGradient id="linear-gradient-17" x1="0.502" y1="1" x2="0.502" y2="0" xlink:href="#linear-gradient"/>
      <linearGradient id="linear-gradient-18" x1="-14.076" y1="1" x2="-14.076" y2="0.001" xlink:href="#linear-gradient"/>
      <linearGradient id="linear-gradient-19" x1="-13.78" y1="1.001" x2="-13.78" y2="0.001" xlink:href="#linear-gradient"/>
    </defs>
    <g id="Illustration" transform="translate(0)">
      <path id="Shape" d="M.458,311.948a165.6,165.6,0,0,0,11.356,46.567l387.674.088L399.567,0,272.732.374S222.951-5.345,171.917,35.068q-2.386,1.891-4.688,3.889a139.3,139.3,0,0,0-19.483,20.7,144.554,144.554,0,0,0-28.493,70.212c-2.461,20-8.7,45.428-23.885,66.495q-.8,1.079-1.59,2.149a92.868,92.868,0,0,1-44.93,32.258c-18.9,6.428-30.986,16.848-38.4,29.054C.692,275.813-1,294.87.458,311.948Z" fill="#f7f7f7" opacity="0.8"/>
      <g id="Group_3" data-name="Group 3" transform="translate(44 54)">
        <g id="Group" transform="translate(70.732 85.262)" opacity="0.5">
          <path id="Shape-2" data-name="Shape" d="M67.393,2.611a11.322,11.322,0,0,1,4.72,3.272c1.916,2.611,1.435,6.34-.032,9.23s-3.769,5.262-5.535,7.96-3.006,6.1-1.988,9.182,3.857,4.979,6.4,6.913a59.352,59.352,0,0,1,9.1,8.6c2.286,2.667,4.429,6.368,2.847,9.5-1.292,2.563-4.429,3.423-7.066,4.565a19.05,19.05,0,0,0-10.7,11.359c-1.638,5.21-.612,11.045-2.672,16.1A6.647,6.647,0,0,1,60,92.56a7.4,7.4,0,0,1-2.851.888c-2.549.378-5.169.362-7.67.907-5.249,1.134-9.682,4.581-13.642,8.211a112.111,112.111,0,0,0-10.891,11.49c-1.928-3.642-5.845-5.811-8.183-9.206-4.97-7.228-1.8-18.28-7.686-24.784C6.291,76.99,1.731,75.315.383,71.39a9.277,9.277,0,0,1,.262-5.97,15.846,15.846,0,0,1,6.664-8.326C9.48,55.765,12.053,54.9,13.631,52.9a9.979,9.979,0,0,0,1.753-6.173c.056-6.2-2.485-12.473-.954-18.487A14.441,14.441,0,0,1,26.916,17.691a43.351,43.351,0,0,0,4.557-.283,13.948,13.948,0,0,0,6.509-3.737c4.5-4.091,8.195-9.437,13.686-12.338C56.661-1.305,62.558.426,67.393,2.611Z" transform="translate(0.233 0.31)" fill="#f55f44"/>
          <path id="Shape-3" data-name="Shape" d="M46.892,0S-7.462,81.889.868,105.869" transform="translate(20.671 3.12)" fill="#f55f44" stroke="#535461" stroke-miterlimit="10" stroke-width="0.714" opacity="0.6"/>
          <path id="Shape-4" data-name="Shape" d="M41.917,10.2S26.692-.872,0,.055" transform="translate(42.083 45.807)" fill="#f55f44" stroke="#535461" stroke-miterlimit="10" stroke-width="0.714" opacity="0.6"/>
          <path id="Shape-5" data-name="Shape" d="M18.465,33.886A48.357,48.357,0,0,0,0,0" transform="translate(18.211 22.352)" fill="#f55f44" stroke="#535461" stroke-miterlimit="10" stroke-width="0.714" opacity="0.6"/>
          <path id="Shape-6" data-name="Shape" d="M34.39,16S13.956-.532,0,.013" transform="translate(28.501 73.868)" fill="#f55f44" stroke="#535461" stroke-miterlimit="10" stroke-width="0.714" opacity="0.6"/>
          <path id="Shape-7" data-name="Shape" d="M24.557,15.124S15.75,3.108,0,0" transform="translate(0.31 68.258)" fill="#f55f44" stroke="#535461" stroke-miterlimit="10" stroke-width="0.714" opacity="0.6"/>
        </g>
        <g id="Group-2" data-name="Group" transform="translate(230.573 87.252)" opacity="0.5">
          <path id="Shape-8" data-name="Shape" d="M22.233,1.006A11.393,11.393,0,0,1,27.9.094c3.181.557,5.423,3.582,6.362,6.682s.918,6.408,1.523,9.592,2.052,6.483,4.907,8.012,6.227.923,9.4.557A59.27,59.27,0,0,1,62.6,24.822c3.5.338,7.594,1.52,8.62,4.88.839,2.746-.827,5.54-1.94,8.187A19.049,19.049,0,0,0,69.414,53.5c2.421,4.9,7.2,8.4,9.209,13.472a6.677,6.677,0,0,1,.485,4.06,7.417,7.417,0,0,1-1.443,2.619c-1.59,2.038-3.467,3.833-4.907,5.97-3,4.458-3.817,10.014-4.167,15.379a112.268,112.268,0,0,0,.087,15.837c-3.913-1.29-8.239-.139-12.27-.971C47.824,108.1,42.464,97.928,33.72,97.307c-4.135-.291-8.584,1.656-12.274-.239a9.286,9.286,0,0,1-3.928-4.482,15.863,15.863,0,0,1-.95-10.627c.648-2.464,1.909-4.872,1.662-7.407a10,10,0,0,0-3-5.668C10.969,64.368,4.79,61.606,1.744,56.2A14.465,14.465,0,0,1,3.458,39.935a43.259,43.259,0,0,0,3.093-3.363,13.971,13.971,0,0,0,2.111-7.208c.417-6.07-.612-12.489,1.348-18.384C11.792,5.627,17.223,2.789,22.233,1.006Z" transform="translate(0.347 0.121)" fill="#4db6ac"/>
          <path id="Shape-9" data-name="Shape" d="M0,0S17.4,96.759,40.008,108.3" transform="translate(22.68 1.305)" fill="none" stroke="#535461" stroke-miterlimit="10" stroke-width="0.714" opacity="0.6"/>
          <path id="Shape-10" data-name="Shape" d="M37.264,0S18.624,2.563,0,21.727" transform="translate(33.841 28.087)" fill="none" stroke="#535461" stroke-miterlimit="10" stroke-width="0.714" opacity="0.6"/>
          <path id="Shape-11" data-name="Shape" d="M36.751,11.928A48.248,48.248,0,0,0,0,.274" transform="translate(0.366 49.118)" fill="none" stroke="#535461" stroke-miterlimit="10" stroke-width="0.714" opacity="0.6"/>
          <path id="Shape-12" data-name="Shape" d="M35.873,0S9.694,2.225,0,12.29" transform="translate(43.423 67.151)" fill="none" stroke="#535461" stroke-miterlimit="10" stroke-width="0.714" opacity="0.6"/>
          <path id="Shape-13" data-name="Shape" d="M28.191.357S13.523-2.214,0,6.446" transform="translate(19.169 88.454)" fill="none" stroke="#535461" stroke-miterlimit="10" stroke-width="0.714" opacity="0.6"/>
        </g>
        <g id="Group-3" data-name="Group" transform="translate(135.145 0.487)" opacity="0.5">
          <path id="Shape-14" data-name="Shape" d="M8.281,236c3.726-2.209,5.69-9.584,6.278-12.183L19,166.367s3.336-19.013,16-46.1c.151-16.127.748-67.119,2.191-72.608l8.549-10.416a19.679,19.679,0,0,0-1.4-2.121h0L42.158,41.31l-7.9-.884,4.262-8.155a14.258,14.258,0,0,1-2.676-19.307,3.509,3.509,0,0,1,.147-4.45,18.223,18.223,0,0,1,4.676-3.889A16.652,16.652,0,0,1,64.945,27.348,3.634,3.634,0,0,0,66.6,28.411a15.173,15.173,0,0,1,6.918,4.708,2.883,2.883,0,0,1-.6,4.342l-1.292.824a2.872,2.872,0,0,1-3.372-.207L65.582,35.87a.213.213,0,0,0-.29.31,2.6,2.6,0,0,1-1.264,4.3h-.056l.056.028-.076.064a35.135,35.135,0,0,1,7.1,11.025c3.579,4.358,6.835,13.174,6.6,30.873q.4,4.836.529,10.348l4.119,17.007s31.742,58.6,23.865,66.319c0,0-4.771.848-11.451,2.619l19,25.21-.262.251,12.119,8.868s-2.231,5.668-3.777,6.527-2.06,4.466-2.06,4.466-5.837,11.853-10.127,11.168-1.193-5.5,0-10.651c.934-4.008-2.6-10.1-4.211-12.6l-.421.4s-22.561-16.963-31.189-26.455a64.686,64.686,0,0,0-12.918,7.383s-6.485-15.809-12.569-41.985h0l-.052.08c-5.328,7.96-14.294,21.922-14.656,26.268-.513,6.185-2.573,28.688-5.662,34.7L25.7,224.07H25.57l2.068,15.49s-5.634,2.308-7.32,1.787-4.648,1.592-4.648,1.592-12.588,3.98-15.062.4S3.717,238.7,8.281,236Z" transform="translate(0.037 0.369)" fill="url(#linear-gradient)"/>
        </g>
        <path id="Oval" d="M15.928,0A15.944,15.944,0,1,1,0,15.944,15.936,15.936,0,0,1,15.928,0Z" transform="translate(171.905 6.134)"/>
        <path id="Shape-15" data-name="Shape" d="M20.7,0,41.376,27.463,33,35.518S3.976,13.7.37,6.508A2.892,2.892,0,0,1,0,5.274C.012-.163,20.7,0,20.7,0Z" transform="translate(205.308 173.865)" fill="#252a62"/>
        <path id="Shape-16" data-name="Shape" d="M35.96,31.395S18.712,56.035,18.227,61.965s-2.461,27.462-5.419,33.2l-2.135,11.176H0L4.27,51.116S8.048,29.584,22.99,0L41.873,10.348Z" transform="translate(151.789 114.201)" fill="#252a62"/>
        <path id="Rectangle-path" d="M0,0H15.105V64.1H0Z" transform="translate(189.638 118.232) rotate(-180)" fill="#fff"/>
        <path id="Shape-17" data-name="Shape" d="M6.588,76.743,0,86.614s2.648-67.4,4.29-73.631L14.962,0l3.614,9.552-8.2,10.157S5.284,34.833,6.1,49.623,6.588,76.743,6.588,76.743Z" transform="translate(169.67 38.775)" opacity="0.1"/>
        <path id="Shape-18" data-name="Shape" d="M5.583,0,0,10.682l7.555.824L11.332.82,5.583,0Z" transform="translate(170.672 34.158)" fill="#ffc533"/>
        <path id="Oval-2" data-name="Oval" d="M13.63,0A13.644,13.644,0,1,1,0,13.644,13.637,13.637,0,0,1,13.63,0Z" transform="translate(169.686 12.789)" fill="#fda57d"/>
        <path id="Shape-19" data-name="Shape" d="M4.926,11.176A18.972,18.972,0,0,0,0,3.288L12.807,0l3.121,7.069Z" transform="translate(178.39 34.321)" fill="#fda57d"/>
        <path id="Shape-20" data-name="Shape" d="M11.547,0S33.714-1.639,35.193,54.9l3.94,16.27s30.378,56.047,22.823,63.446c0,0-28.573,5.094-43.34,16.438,0,0-11.328-27.614-17.734-70.017,0,0-3.447-46.169,3.284-61.8L.883,11.348Z" transform="translate(177.519 40.083)" fill="#3ad29f"/>
        <path id="Shape-21" data-name="Shape" d="M6.1,76.743,0,86.614s2.155-67.4,3.8-73.631L14.469,0l3.614,9.552L9.873,19.741S4.783,34.865,5.6,49.655,6.1,76.743,6.1,76.743Z" transform="translate(169.67 38.775)" fill="#3ad29f"/>
        <path id="Shape-22" data-name="Shape" d="M6.1,76.743,0,86.614s2.155-67.4,3.8-73.631L14.469,0l3.614,9.552L9.873,19.741S4.783,34.865,5.6,49.655,6.1,76.743,6.1,76.743Z" transform="translate(169.67 38.775)" opacity="0.05"/>
        <path id="Oval-3" data-name="Oval" d="M.656,0A.657.657,0,1,1,0,.657.656.656,0,0,1,.656,0Z" transform="translate(179.539 68.84)" fill="#4d8af0"/>
        <path id="Oval-4" data-name="Oval" d="M.656,0A.657.657,0,1,1,0,.657.656.656,0,0,1,.656,0Z" transform="translate(179.539 93.492)" fill="#4d8af0"/>
        <path id="Shape-23" data-name="Shape" d="M7.256,0,20.064,9.377s-2.135,5.425-3.614,6.245S14.461,19.9,14.461,19.9,8.895,31.235,4.771,30.579s-1.149-5.262,0-10.189S0,7.256,0,7.256Z" transform="translate(237.964 200.659)"/>
        <path id="Shape-24" data-name="Shape" d="M24.341.211l2.1,15.737s-5.392,2.209-7.006,1.707-4.445,1.532-4.445,1.532S2.945,23,.579,19.586s3-4.47,7.352-7.049S14.126,0,14.126,0Z" transform="translate(137.87 219.417)"/>
        <path id="Shape-25" data-name="Shape" d="M17.567.163.489,14.953,0,14.627,17.241,0l.326.163Z" transform="translate(181.594 44.761)" opacity="0.1"/>
        <path id="Shape-26" data-name="Shape" d="M17.98,1.811,8.374,0,0,11.176l4.843,2.929L17.98,1.811Z" transform="translate(176.338 42.95)" fill="#3ad29f"/>
        <path id="Shape-27" data-name="Shape" d="M.943,9.873,7.169,16.48v4.048a20.351,20.351,0,0,0,1.519,7.725l4.183,10.213a2.751,2.751,0,0,0,3.559,1.516l3.527-1.4a2.755,2.755,0,0,0,1.5-3.666l-.99-2.289a.2.2,0,1,1,.354-.2L22.835,35.3a2.75,2.75,0,0,0,2.918,1.087L27.7,35.9a2.488,2.488,0,0,0,1.193-4.115h0a.2.2,0,0,1,.278-.295L31.726,33.6a2.749,2.749,0,0,0,3.225.2l1.237-.8a2.756,2.756,0,0,0,.577-4.155,14.5,14.5,0,0,0-6.616-4.505c-3-.844-4.076-6.145-4.441-10.531A15.027,15.027,0,0,0,16.06.914C11.587-.745,6.092-.61.855,5.292A3.37,3.37,0,0,0,.943,9.873Z" transform="translate(171.467 9.447)" opacity="0.05"/>
        <path id="Shape-28" data-name="Shape" d="M.907,9.845l6.227,6.607V20.5a20.351,20.351,0,0,0,1.519,7.713l4.183,10.213a2.751,2.751,0,0,0,3.559,1.516l3.527-1.4a2.755,2.755,0,0,0,1.5-3.666l-.99-2.257a.2.2,0,1,1,.354-.2L22.8,35.289a2.75,2.75,0,0,0,2.918,1.087l1.944-.486a2.488,2.488,0,0,0,1.193-4.115h0a.2.2,0,0,1,.278-.295l2.557,2.113a2.749,2.749,0,0,0,3.225.2l1.237-.8a2.748,2.748,0,0,0,.6-4.131,14.527,14.527,0,0,0-6.636-4.525c-3-.848-4.076-6.181-4.433-10.575A15.026,15.026,0,0,0,15.738.8C11.332-.734,5.98-.475.871,5.272A3.385,3.385,0,0,0,.907,9.845Z" transform="translate(171.503 8.994)" fill="#ffc533"/>
        <path id="Shape-29" data-name="Shape" d="M3.284,0l.052.828L0,.414.175,0Z" transform="translate(174.918 118.228)" opacity="0.1"/>
        <path id="Shape-30" data-name="Shape" d="M1.233,0H0S3.423,31.709,6.759,32.29l.258-.4S1.559,6.082,1.233,0Z" transform="translate(177.078 119.052)" opacity="0.1"/>
        <path id="Shape-31" data-name="Shape" d="M.841,8.182A17.543,17.543,0,0,1,5.31,4.46,15.932,15.932,0,0,1,28.543,26.2c-.592.7-14.668-4.068-14.668-4.068A43.21,43.21,0,0,1,.917,12.719h0c-.048-.052-.1-.107-.139-.163A3.362,3.362,0,0,1,.841,8.182Z" transform="translate(171.493 6.601)" opacity="0.05"/>
        <path id="Shape-32" data-name="Shape" d="M.841,8.182A17.543,17.543,0,0,1,5.31,4.46,15.932,15.932,0,0,1,28.543,26.2c-.592.7-14.668-4.068-14.668-4.068A43.21,43.21,0,0,1,.917,12.719h0c-.048-.052-.1-.107-.139-.163A3.362,3.362,0,0,1,.841,8.182Z" transform="translate(171.493 6.12)" fill="#252a62"/>
        <g id="Group_2" data-name="Group 2" transform="translate(0.4 132.725)">
          <g id="Group-4" data-name="Group" transform="translate(0.749 34.923)" opacity="0.5">
            <path id="Shape-33" data-name="Shape" d="M0,17.621A12.055,12.055,0,0,0,12.14,29.335h.911a3.068,3.068,0,0,1,2.151.872,3,3,0,0,1,.875,1.528,2.864,2.864,0,0,1,.091.724V44A11.578,11.578,0,0,0,18,50.262a16.557,16.557,0,0,1,2.72,8.911h0a5.569,5.569,0,0,0,5.662,5.572A5.682,5.682,0,0,0,31.83,59v-2.89l1.515.175v2.893a5.569,5.569,0,0,0,5.662,5.572,5.682,5.682,0,0,0,5.451-5.743V57.549c1.515.633,10.1.633,12.489.02l.648-.052v1.676a5.569,5.569,0,0,0,5.662,5.572,5.682,5.682,0,0,0,5.451-5.743V56.634l.5-.044v2.631a5.645,5.645,0,0,0,.171,1.381,5.567,5.567,0,0,0,5.491,4.183,5.656,5.656,0,0,0,5.4-4.967,6.577,6.577,0,0,0,.052-.8V46.906a18.523,18.523,0,0,0-3.936-11.455,3.434,3.434,0,0,1-.1-4.052c2.831-4.147,7.014-11.144,6.875-16.107a5.444,5.444,0,0,0-1.324-3.674l-.167-.175a6.2,6.2,0,0,0-10.624,4.967,16.473,16.473,0,0,1-.429,5.867,17.965,17.965,0,0,1-1.137,3.144,5.327,5.327,0,0,1-5.451,3.033,18.821,18.821,0,0,0-2.278-.135H38.4a6.565,6.565,0,0,1-6.215-4.454,6.374,6.374,0,0,1-.354-2.117V3.54A3.54,3.54,0,0,0,28.184,0,3.438,3.438,0,0,0,25.743,1.14a3.807,3.807,0,0,0-.986,2.551,1.874,1.874,0,0,1-1.873,1.875H11.874A11.875,11.875,0,0,0,0,17.621Z" transform="translate(1.279 0.17)" fill="url(#linear-gradient-2)"/>
            <path id="Shape-34" data-name="Shape" d="M0,1.6A5.567,5.567,0,0,0,5.491,5.786a5.656,5.656,0,0,0,5.4-4.967C7.527-.088,2.859-.717,0,1.6Z" transform="translate(70.668 59.116)" fill="url(#linear-gradient-3)"/>
            <path id="Shape-35" data-name="Shape" d="M0,1.6A5.567,5.567,0,0,0,5.491,5.786,5.656,5.656,0,0,0,10.9.819C7.531-.088,2.867-.717,0,1.6Z" transform="translate(59.046 59.116)" fill="url(#linear-gradient-4)"/>
            <path id="Shape-36" data-name="Shape" d="M0,1.6A5.567,5.567,0,0,0,5.491,5.786,5.656,5.656,0,0,0,10.9.819C7.531-.088,2.867-.717,0,1.6Z" transform="translate(34.795 59.116)" fill="url(#linear-gradient-5)"/>
            <path id="Shape-37" data-name="Shape" d="M0,1.6A5.567,5.567,0,0,0,5.491,5.786a5.656,5.656,0,0,0,5.4-4.967C7.527-.088,2.851-.717,0,1.6Z" transform="translate(22.167 59.116)" fill="url(#linear-gradient-6)"/>
            <path id="Shape-38" data-name="Shape" d="M0,12.743A81.03,81.03,0,0,0,12.541,5.77,5.444,5.444,0,0,0,11.217,2.1l-.167-.175A6.2,6.2,0,0,0,.421,6.876,16.473,16.473,0,0,1,0,12.743Z" transform="translate(71.913 9.705)" fill="url(#linear-gradient-7)"/>
            <path id="Shape-39" data-name="Shape" d="M28.493.036S17.682,13.656,0,0" transform="translate(38.672 28.489)" fill="url(#linear-gradient-8)"/>
            <path id="Shape-40" data-name="Shape" d="M2.919,0s-6.569,8.6,0,19.22" transform="translate(30.19 3.204)" fill="url(#linear-gradient-9)"/>
            <path id="Shape-41" data-name="Shape" d="M0,0S5.785,7.2.072,12.911" transform="translate(17.463 32.537)" fill="url(#linear-gradient-10)"/>
            <g id="Group-5" data-name="Group" transform="translate(16.7 24.278)" opacity="0.1">
              <path id="Shape-42" data-name="Shape" d="M0,6.48c.429.4.282.8.4,1.385L19.209,2.937c-1.01-.8-2.262-1.7-2.676-2.937C14.266,1.751,9.817,4.685,0,6.48Z" transform="translate(0.243 0.263)" fill="url(#linear-gradient-11)"/>
            </g>
            <path id="Shape-43" data-name="Shape" d="M0,6.332A3,3,0,0,1,.875,7.861l18.29-4.776A6.531,6.531,0,0,1,16.962,0C14.728,1.743,9.817,4.537,0,6.332Z" transform="translate(16.481 24.039)" fill="url(#linear-gradient-12)"/>
            <path id="Shape-44" data-name="Shape" d="M15.312,0A35.507,35.507,0,0,1,0,5.648" transform="translate(17.463 25.046)" opacity="0.1" fill="url(#linear-gradient-13)"/>
            <path id="Shape-45" data-name="Shape" d="M15.312,0A35.447,35.447,0,0,1,0,5.648" transform="translate(17.463 24.541)" fill="url(#linear-gradient-13)"/>
            <g id="Group-6" data-name="Group" transform="translate(5.964 18.308)" opacity="0.1">
              <path id="Shape-46" data-name="Shape" d="M12.127,6.575S2.529,9.608,0,0Z" transform="translate(0.366 0.068)" fill="url(#linear-gradient-15)"/>
            </g>
            <path id="Shape-47" data-name="Shape" d="M12.127,6.575S2.529,9.608,0,0Z" transform="translate(6.33 17.87)" fill="url(#linear-gradient-15)"/>
            <path id="Oval-5" data-name="Oval" d="M1.01,0c.558,0,1.01.793,1.01,1.771S1.568,3.542,1.01,3.542,0,2.749,0,1.771.452,0,1.01,0Z" transform="translate(0.266 14.834)" fill="url(#linear-gradient-17)"/>
            <path id="Shape-48" data-name="Shape" d="M2.02,16.2,0,0S6.064,9.608,2.02,16.183" transform="translate(75.801 36.815)" opacity="0.1" fill="url(#linear-gradient-18)"/>
            <path id="Shape-49" data-name="Shape" d="M0,0S6.064,9.608,2.02,16.183Z" transform="translate(75.296 36.815)" fill="url(#linear-gradient-19)"/>
          </g>
          <path id="Shape-50" data-name="Shape" d="M0,16.813A11.5,11.5,0,0,0,11.584,27.989h.867a2.929,2.929,0,0,1,2.056.832,2.862,2.862,0,0,1,.835,1.457,2.733,2.733,0,0,1,.087.689V41.983a11.049,11.049,0,0,0,1.746,5.97,15.8,15.8,0,0,1,2.592,8.5h0a5.311,5.311,0,0,0,5.4,5.309,5.419,5.419,0,0,0,5.2-5.481V53.529l1.447.167v2.762a5.311,5.311,0,0,0,5.4,5.309,5.419,5.419,0,0,0,5.2-5.481V54.894c1.447.6,9.642.6,11.928,0l.616-.048v1.592a5.311,5.311,0,0,0,5.4,5.309,5.419,5.419,0,0,0,5.2-5.481V53.975l.481-.044v2.507a5.386,5.386,0,0,0,.163,1.317,5.313,5.313,0,0,0,5.241,3.98A5.4,5.4,0,0,0,76.625,57a6.275,6.275,0,0,0,.048-.744V44.709a17.675,17.675,0,0,0-3.761-10.921,3.274,3.274,0,0,1-.091-3.865c2.7-3.956,6.692-10.635,6.561-15.371a5.177,5.177,0,0,0-1.264-3.5l-.159-.167a5.91,5.91,0,0,0-10.135,4.728,15.72,15.72,0,0,1-.4,5.6,17.125,17.125,0,0,1-1.085,3,5.085,5.085,0,0,1-5.2,2.893,17.958,17.958,0,0,0-2.175-.131H36.653a6.267,6.267,0,0,1-5.928-4.251,6.1,6.1,0,0,1-.338-2.022V3.381A3.377,3.377,0,0,0,26.908,0a3.283,3.283,0,0,0-2.33,1.087,3.632,3.632,0,0,0-.938,2.432A1.79,1.79,0,0,1,21.85,5.311H11.341A11.33,11.33,0,0,0,0,16.813Z" transform="translate(3.897 36.573)" fill="#f3ad55"/>
          <path id="Shape-51" data-name="Shape" d="M0,1.533a5.313,5.313,0,0,0,5.241,3.98A5.4,5.4,0,0,0,10.41.773C7.181-.083,2.732-.684,0,1.533Z" transform="translate(70.121 92.82)" fill="#f38143"/>
          <path id="Shape-52" data-name="Shape" d="M0,1.533a5.313,5.313,0,0,0,5.241,3.98A5.4,5.4,0,0,0,10.41.773C7.185-.083,2.736-.684,0,1.533Z" transform="translate(59.031 92.82)" fill="#f38143"/>
          <path id="Shape-53" data-name="Shape" d="M0,1.533a5.313,5.313,0,0,0,5.241,3.98A5.4,5.4,0,0,0,10.41.773C7.185-.083,2.736-.684,0,1.533Z" transform="translate(35.89 92.82)" fill="#f38143"/>
          <path id="Shape-54" data-name="Shape" d="M0,1.533a5.313,5.313,0,0,0,5.241,3.98A5.4,5.4,0,0,0,10.41.773C7.185-.083,2.724-.684,0,1.533Z" transform="translate(23.839 92.82)" fill="#f38143"/>
          <path id="Shape-55" data-name="Shape" d="M0,12.159A75.951,75.951,0,0,0,11.964,5.5,5.177,5.177,0,0,0,10.7,2l-.159-.167A5.91,5.91,0,0,0,.406,6.563,15.72,15.72,0,0,1,0,12.159Z" transform="translate(71.306 45.673)" fill="#f8dea5"/>
          <path id="Shape-56" data-name="Shape" d="M27.189.032S16.875,13.031,0,0" transform="translate(39.584 63.599)" fill="#f8dea5"/>
          <path id="Shape-57" data-name="Shape" d="M2.785,0s-6.266,8.2,0,18.336" transform="translate(31.495 39.472)" fill="#f8dea5"/>
          <path id="Shape-58" data-name="Shape" d="M0,0S5.519,6.866.068,12.338" transform="translate(19.338 67.46)" fill="#f8dea5"/>
          <path id="Shape-59" data-name="Shape" d="M0,6.165c.4.4.27.756.4,1.321l17.924-4.7A6.978,6.978,0,0,1,15.765,0C13.614,1.652,9.364,4.454,0,6.165Z" transform="translate(18.856 59.846)" opacity="0.1"/>
          <path id="Shape-60" data-name="Shape" d="M0,6.05A2.862,2.862,0,0,1,.835,7.506L18.306,2.945A6.229,6.229,0,0,1,16.2,0C14.056,1.672,9.368,4.334,0,6.05Z" transform="translate(18.415 59.345)" fill="#383f4d"/>
          <path id="Shape-61" data-name="Shape" d="M14.624,0A33.856,33.856,0,0,1,0,5.389" transform="translate(19.338 60.312)" opacity="0.1"/>
          <path id="Shape-62" data-name="Shape" d="M14.624,0A33.856,33.856,0,0,1,0,5.389" transform="translate(19.338 59.83)" fill="#f3ad55"/>
          <path id="Shape-63" data-name="Shape" d="M11.571,6.273S2.425,9.166,0,0Z" transform="translate(5.946 55.54)" opacity="0.1"/>
          <path id="Shape-64" data-name="Shape" d="M11.571,6.273S2.425,9.166,0,0Z" transform="translate(5.946 55.058)" fill="#f3ad55"/>
          <path id="Oval-6" data-name="Oval" d="M.962,0c.531,0,.962.756.962,1.688S1.494,3.375.962,3.375,0,2.62,0,1.688.431,0,.962,0Z" transform="translate(2.948 50.573)" fill="#383f4d"/>
          <path id="Shape-65" data-name="Shape" d="M1.928,15.443,0,0S5.785,9.154,1.928,15.443" transform="translate(75.019 71.559)" opacity="0.1"/>
          <path id="Shape-66" data-name="Shape" d="M0,0S5.785,9.154,1.928,15.443Z" transform="translate(74.538 71.559)" fill="#f3ad55"/>
          <path id="Shape-67" data-name="Shape" d="M0,62.184S28.318,78.2,49.419,69.925A26.473,26.473,0,0,0,65.4,50.964a42.533,42.533,0,0,1,5.646-13.48,41.017,41.017,0,0,1,35.241-18.635c14.676.207,42.223-1.787,50.3-18.849" transform="translate(34.28 0.822)" fill="none" stroke="#383f4d" stroke-miterlimit="10" stroke-width="0.795" opacity="0.1"/>
          <path id="Shape-68" data-name="Shape" d="M0,62.164s28.318,16.012,49.419,7.741A26.473,26.473,0,0,0,65.4,50.945a42.533,42.533,0,0,1,5.646-13.461,41.017,41.017,0,0,1,35.241-18.635c14.676.207,42.223-1.787,50.3-18.849" transform="translate(34.28 0.36)" fill="none" stroke="#383f4d" stroke-miterlimit="10" stroke-width="0.795"/>
        </g>
        <path id="Shape-69" data-name="Shape" d="M13.442,2.464S14.607,19.829,3.2,23.486A2.438,2.438,0,0,1,.022,21.317C-.168,18.364.774,12.282,6.209,0Z" transform="translate(186.952 118.642)" opacity="0.1"/>
        <path id="Shape-70" data-name="Shape" d="M13.442,2.464S14.607,19.829,3.2,23.486A2.438,2.438,0,0,1,.022,21.317C-.168,18.364.774,12.282,6.209,0Z" transform="translate(186.296 118.312)" fill="#fda57d"/>
        <path id="Shape-71" data-name="Shape" d="M7.241.061S23.662-3.227,21.69,38.52c0,0-3.94,30.571-10.839,32.545L.513,68.434l4.1-28.6L.513,25.04S-2.763,2.692,7.241.061Z" transform="translate(190.362 51.518)" opacity="0.1"/>
        <path id="Shape-72" data-name="Shape" d="M7.244.061S23.666-3.227,21.694,38.52c0,0-3.94,30.571-10.839,32.545L.517,68.434l4.1-28.6L.517,25.04S-2.772,2.692,7.244.061Z" transform="translate(188.879 51.518)" opacity="0.1"/>
        <path id="Shape-73" data-name="Shape" d="M7.244.061S23.666-3.227,21.694,38.52c0,0-3.94,30.571-10.839,32.545L.517,68.434l4.1-28.6L.517,25.04S-2.772,2.692,7.244.061Z" transform="translate(189.702 51.518)" fill="#3ad29f"/>
        <path id="Shape-74" data-name="Shape" d="M8.5,3.116V2.066L.378,0,0,.888,8.5,3.116Z" transform="translate(191.264 120.318)" opacity="0.1"/>
      </g>
    </g>
  </svg>
  `,
  },
  {
    id: 3,
    title: 'Get a new experience of imagination',
    img: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="399.567" height="360.192" viewBox="0 0 399.567 360.192">
    <defs>
      <linearGradient id="linear-gradient" x1="0.5" y1="1" x2="0.5" gradientUnits="objectBoundingBox">
        <stop offset="0" stop-color="gray" stop-opacity="0.251"/>
        <stop offset="0.54" stop-color="gray" stop-opacity="0.122"/>
        <stop offset="1" stop-color="gray" stop-opacity="0.102"/>
      </linearGradient>
    </defs>
    <g id="Illustration" transform="translate(0 -0.41)">
      <path id="Shape" d="M.458,311.948a165.6,165.6,0,0,0,11.356,46.567l387.674.088L399.567,0,272.732.374S222.951-5.345,171.917,35.068q-2.386,1.891-4.688,3.889a139.3,139.3,0,0,0-19.483,20.7,144.554,144.554,0,0,0-28.493,70.212c-2.461,20-8.7,45.428-23.885,66.495q-.8,1.079-1.59,2.149a92.868,92.868,0,0,1-44.93,32.258c-18.9,6.428-30.986,16.848-38.4,29.054C.692,275.813-1,294.87.458,311.948Z" transform="translate(0 2)" fill="#f7f7f7" opacity="0.8"/>
      <g id="Group_2" data-name="Group 2" transform="translate(44)">
        <g id="Group_4" data-name="Group 4" transform="translate(0.8 162.255)">
          <path id="Shape-2" data-name="Shape" d="M7.6,114.275S18.112,78.481,5.631,52.135A56.685,56.685,0,0,1,1.073,16.666,95.309,95.309,0,0,1,6.078,0" transform="translate(19.213 25.078)" fill="none" stroke="#535461" stroke-miterlimit="10" stroke-width="0.714" opacity="0.6"/>
          <path id="Shape-3" data-name="Shape" d="M0,7.76c0,4.389,7.919,17.094,7.919,17.094S15.838,12.132,15.838,7.76A7.919,7.919,0,0,0,0,7.76Z" transform="translate(17.53 0.691)" fill="#a3d8d3"/>
          <path id="Shape-4" data-name="Shape" d="M1.382,12.432C3.759,16.116,17.3,22.475,17.3,22.475s-.247-15-2.624-18.679A7.926,7.926,0,1,0,1.382,12.428Z" transform="translate(3.058 20.317)" fill="#a3d8d3"/>
          <path id="Shape-5" data-name="Shape" d="M4.535,15.126c3.906,1.974,18.79.611,18.79.611S15.568,2.917,11.661.943A7.939,7.939,0,1,0,4.535,15.126Z" transform="translate(0.493 59.147)" fill="#a3d8d3"/>
          <path id="Shape-6" data-name="Shape" d="M3.159,14.294c3.514,2.607,18.42,3.786,18.42,3.786s-5.487-13.948-9-16.559A7.935,7.935,0,0,0,3.159,14.294Z" transform="translate(9.34 91.3)" fill="#a3d8d3"/>
          <path id="Shape-7" data-name="Shape" d="M17.751,13.644C14.616,16.7,0,19.866,0,19.866S3.578,5.306,6.714,2.247a7.933,7.933,0,0,1,11.037,11.4Z" transform="translate(19.226 29.998)" fill="#a3d8d3"/>
          <path id="Shape-8" data-name="Shape" d="M18.79,14.966C14.884,16.941,0,15.577,0,15.577S7.757,2.757,11.663.783a7.939,7.939,0,0,1,7.131,14.183Z" transform="translate(26.48 65.418)" fill="#a3d8d3"/>
          <path id="Shape-9" data-name="Shape" d="M18.42,14.294C14.905,16.9,0,18.08,0,18.08S5.487,4.131,9,1.52A7.935,7.935,0,0,1,18.42,14.294Z" transform="translate(30.024 102.906)" fill="#a3d8d3"/>
        </g>
        <g id="Group_5" data-name="Group 5" transform="translate(67.2 215.269)">
          <path id="Shape-10" data-name="Shape" d="M4.1,61.853s5.691-19.38-1.065-33.64A30.694,30.694,0,0,1,.57,9.013,51.6,51.6,0,0,1,3.279,0" transform="translate(10.539 13.585)" fill="none" stroke="#535461" stroke-miterlimit="10" stroke-width="0.714" opacity="0.6"/>
          <path id="Shape-11" data-name="Shape" d="M0,4.3c0,2.376,4.285,9.26,4.285,9.26S8.575,6.673,8.575,4.3A4.288,4.288,0,1,0,0,4.3Z" transform="translate(9.609 0.267)" fill="#f7ac9f"/>
          <path id="Shape-12" data-name="Shape" d="M.688,6.639c1.278,1.991,8.618,5.436,8.618,5.436S9.174,3.955,7.888,1.964a4.292,4.292,0,0,0-7.2,4.675Z" transform="translate(1.837 11.082)" fill="#f7ac9f"/>
          <path id="Shape-13" data-name="Shape" d="M2.362,8.139c2.13,1.068,10.173.329,10.173.329S8.335,1.528,6.222.46A4.3,4.3,0,0,0,2.362,8.152Z" transform="translate(0.474 32.065)" fill="#f7ac9f"/>
          <path id="Shape-14" data-name="Shape" d="M1.748,7.77c1.9,1.41,9.972,2.051,9.972,2.051S8.738,2.27,6.847.847A4.3,4.3,0,0,0,1.735,7.761Z" transform="translate(5.14 49.391)" fill="#f7ac9f"/>
          <path id="Shape-15" data-name="Shape" d="M9.61,7.466C7.906,9.12,0,10.834,0,10.834S1.938,2.949,3.634,1.3A4.292,4.292,0,1,1,9.6,7.466Z" transform="translate(10.534 16.153)" fill="#f7ac9f"/>
          <path id="Shape-16" data-name="Shape" d="M10.173,8.139C8.043,9.207,0,8.468,0,8.468S4.2,1.528,6.313.46a4.3,4.3,0,0,1,3.859,7.692Z" transform="translate(14.457 35.372)" fill="#f7ac9f"/>
          <path id="Shape-17" data-name="Shape" d="M9.972,7.77C8.068,9.18,0,9.821,0,9.821S2.982,2.27,4.873.847A4.3,4.3,0,0,1,9.985,7.762Z" transform="translate(16.378 55.672)" fill="#f7ac9f"/>
        </g>
        <g id="Group" transform="translate(229.223 73.93)" opacity="0.6">
          <path id="Shape-18" data-name="Shape" d="M1.056,5.5A2.893,2.893,0,0,0,.016,8.041c.337,3.141,1.35,10.29,3.881,14.316q.226.359.469.684h13.67s2.786-10.4,2.982-14.987a3.453,3.453,0,0,0-1.24-2.791C17.729,3.554,12.919-.164,10.193.084h-.055S9.09-1.108,1.056,5.5Z" transform="translate(0.001 0.151)" fill="#d6dbe6"/>
          <path id="Shape-19" data-name="Shape" d="M.017,8.045c.337,3.141,1.35,10.29,3.881,14.316.545.235,1.1.466,1.653.684,3.438,1.35,6.705,2.137,6.177,0a4.867,4.867,0,0,0-.528-1.209c-3.135-5.47-1.7-17.4-1.018-21.752h-.055S9.086-1.108,1.056,5.5A2.893,2.893,0,0,0,.017,8.045Z" transform="translate(0.005 0.13)" fill="none"/>
          <path id="Shape-20" data-name="Shape" d="M.017,8.045c.337,3.141,1.35,10.29,3.881,14.316.545.235,1.1.466,1.653.684,3.438,1.35,6.705,2.137,6.177,0a4.867,4.867,0,0,0-.528-1.209c-3.135-5.47-1.7-17.4-1.018-21.752h-.055S9.086-1.108,1.056,5.5A2.893,2.893,0,0,0,.017,8.045Z" transform="translate(0.005 0.13)" opacity="0.05"/>
          <path id="Shape-21" data-name="Shape" d="M0,2.673c0,.6.511,1.155,1.376,1.6a8.451,8.451,0,0,0,1.857.665,15.76,15.76,0,0,0,3.681.426,14.806,14.806,0,0,0,4.4-.631,6.2,6.2,0,0,0,1.653-.775,1.666,1.666,0,0,0,.852-1.278c0-.682-.656-1.3-1.738-1.777Q11.821.79,11.527.687A14.482,14.482,0,0,0,6.918,0,13.015,13.015,0,0,0,1.5,1.015a4.762,4.762,0,0,0-.613.354A1.7,1.7,0,0,0,0,2.673Z" transform="translate(4.285 20.139)" fill="#d6dbe6"/>
          <path id="Shape-22" data-name="Shape" d="M0,2.672c0,.6.511,1.155,1.376,1.6a8.451,8.451,0,0,0,1.857.665,15.76,15.76,0,0,0,3.681.426,14.806,14.806,0,0,0,4.413-.618,6.2,6.2,0,0,0,1.653-.775,1.666,1.666,0,0,0,.852-1.278c0-.682-.656-1.3-1.738-1.777Q11.83.8,11.536.7A14.482,14.482,0,0,0,6.918,0,13.015,13.015,0,0,0,1.5,1.015a4.762,4.762,0,0,0-.613.354A1.7,1.7,0,0,0,0,2.672Z" transform="translate(4.141 20.14)" opacity="0.1"/>
          <path id="Shape-23" data-name="Shape" d="M2.19,3.366a1.785,1.785,0,0,0-.473-2.279A1.065,1.065,0,0,1,1.534,0S-.881,1.6.35,3.43Z" transform="translate(10.338 20.183)" fill="#ffd865"/>
          <path id="Shape-24" data-name="Shape" d="M1.21,1.517A.712.712,0,0,0,.948.49.413.413,0,0,1,.848,0S-.488.72.193,1.542Z" transform="translate(10.952 22.085)" fill="#ffd865"/>
          <path id="Shape-25" data-name="Shape" d="M1.21,1.517A.712.712,0,0,0,.948.49.413.413,0,0,1,.848,0S-.488.72.193,1.542Z" transform="translate(10.952 22.085)" opacity="0.1"/>
          <path id="Shape-26" data-name="Shape" d="M0,3.6a8.451,8.451,0,0,0,1.857.665C3.83,3.8,9.487,2.33,10.718.217Q10.454.1,10.16,0C9.372.942,6.168,4.137,0,3.6Z" transform="translate(5.661 20.807)" fill="#565387"/>
          <path id="Shape-27" data-name="Shape" d="M0,.358c.737,1.333,7.638,2.816,10.449,3.37A6.2,6.2,0,0,0,12.1,2.952,25.063,25.063,0,0,1,.6,0,4.762,4.762,0,0,0,0,.358Z" transform="translate(5.171 21.145)" fill="#565387"/>
          <path id="Shape-28" data-name="Shape" d="M8.319.537c.426.4.294,1.064.247,1.632a4.884,4.884,0,0,0,.771,3.017c.358.551.852,1.115.767,1.765s-.767,1.09-1.125,1.667a3,3,0,0,0-.285,2.038c.106.692.319,1.372.375,2.068a.934.934,0,0,1-.051.474,1.281,1.281,0,0,1-.341.376,2.657,2.657,0,0,0-.562.718,1.779,1.779,0,0,1-.285.453,1.1,1.1,0,0,1-.345.209,4.247,4.247,0,0,1-2.939,0A12.713,12.713,0,0,1,1.87,13.6a2.186,2.186,0,0,1-.626-.5,1.8,1.8,0,0,1-.3-1.013c-.038-.773.106-1.551,0-2.32A15.537,15.537,0,0,0,.272,7.448a7.317,7.317,0,0,1,.175-4.5A3.372,3.372,0,0,1,1.478,1.4C2.551.576,4.115.909,5.359.379,6.291,0,7.463-.3,8.319.537Z" transform="translate(5.632 5.001)" fill="#ffd865" opacity="0.35"/>
        </g>
        <g id="Group-2" data-name="Group" transform="translate(266.283)" opacity="0.6">
          <path id="Shape-29" data-name="Shape" d="M1.822,9.53a5,5,0,0,0-1.793,4.4c.584,5.436,2.339,17.8,6.714,24.76q.388.62.809,1.184H31.2s4.822-18,5.142-25.927a5.991,5.991,0,0,0-2.13-4.829C30.665,6.162,22.346-.286,17.626.141h-.094S15.718-1.9,1.822,9.53Z" transform="translate(0.005 0.41)" fill="#d6dbe6"/>
          <path id="Shape-30" data-name="Shape" d="M.027,13.9c.584,5.436,2.339,17.8,6.714,24.76.941.427,1.9.808,2.858,1.184,5.964,2.338,11.6,3.718,10.688,0a8.424,8.424,0,0,0-.912-2.09C13.953,28.285,16.462,7.644,17.612.145h-.094s-1.8-2.06-15.693,9.367A5,5,0,0,0,.027,13.9Z" transform="translate(0.007 0.441)" fill="none"/>
          <path id="Shape-31" data-name="Shape" d="M.027,13.9c.584,5.436,2.339,17.8,6.714,24.76.941.427,1.9.808,2.858,1.184,5.964,2.338,11.6,3.718,10.688,0a8.424,8.424,0,0,0-.912-2.09C13.953,28.285,16.462,7.644,17.612.145h-.094s-1.8-2.06-15.693,9.367A5,5,0,0,0,.027,13.9Z" transform="translate(0.007 0.441)" opacity="0.05"/>
          <path id="Shape-32" data-name="Shape" d="M0,4.644c0,1.043.886,2,2.381,2.782A14.59,14.59,0,0,0,5.6,8.579a27.206,27.206,0,0,0,6.39.714,25.543,25.543,0,0,0,7.638-1.068,10.707,10.707,0,0,0,2.854-1.342,2.9,2.9,0,0,0,1.474-2.235c0-1.184-1.137-2.261-3.007-3.081q-.452-.2-.963-.376A24.987,24.987,0,0,0,11.991,0,22.42,22.42,0,0,0,2.62,1.763a8.232,8.232,0,0,0-1.061.615A2.893,2.893,0,0,0,0,4.644Z" transform="translate(7.412 35.001)" fill="#d6dbe6"/>
          <path id="Shape-33" data-name="Shape" d="M0,4.644c0,1.043.886,2,2.381,2.782A14.59,14.59,0,0,0,5.6,8.579a27.206,27.206,0,0,0,6.39.714,25.543,25.543,0,0,0,7.638-1.068,10.707,10.707,0,0,0,2.854-1.342,2.9,2.9,0,0,0,1.474-2.235c0-1.184-1.137-2.261-3.007-3.081q-.452-.2-.963-.376A24.987,24.987,0,0,0,11.991,0,22.42,22.42,0,0,0,2.62,1.763a8.232,8.232,0,0,0-1.061.615A2.883,2.883,0,0,0,0,4.644Z" transform="translate(7.161 35.001)" opacity="0.1"/>
          <path id="Shape-34" data-name="Shape" d="M3.791,5.824a3.093,3.093,0,0,0-.822-3.945A1.838,1.838,0,0,1,2.654,0S-1.525,2.761.6,5.935Z" transform="translate(17.874 35.068)" fill="#ffd865"/>
          <path id="Shape-35" data-name="Shape" d="M1.705,2.629A1.393,1.393,0,0,0,1.335.852.852.852,0,0,1,1.194,0S-.689,1.244.274,2.671Z" transform="translate(18.942 38.367)" fill="#ffd865"/>
          <path id="Shape-36" data-name="Shape" d="M1.705,2.629A1.393,1.393,0,0,0,1.335.852.852.852,0,0,1,1.194,0S-.689,1.244.274,2.671Z" transform="translate(18.942 38.367)" opacity="0.1"/>
          <path id="Shape-37" data-name="Shape" d="M0,6.235A14.589,14.589,0,0,0,3.216,7.389C6.624,6.594,16.422,4.038,18.552.376Q18.1.175,17.589,0C16.209,1.6,10.667,7.154,0,6.235Z" transform="translate(9.793 36.191)" fill="#565387"/>
          <path id="Shape-38" data-name="Shape" d="M0,.618c1.278,2.3,13.206,4.874,18.075,5.832a10.722,10.722,0,0,0,2.854-1.338A43.362,43.362,0,0,1,1.061,0,8.238,8.238,0,0,0,0,.618Z" transform="translate(8.941 36.751)" fill="#565387"/>
          <path id="Shape-39" data-name="Shape" d="M14.368.928c.7.692.507,1.838.426,2.82a8.448,8.448,0,0,0,1.333,5.218c.622.953,1.478,1.927,1.325,3.055s-1.325,1.885-1.947,2.88a5.28,5.28,0,0,0-.49,3.53c.183,1.2.554,2.372.647,3.581a1.62,1.62,0,0,1-.089.82,2.224,2.224,0,0,1-.592.65,4.6,4.6,0,0,0-.976,1.239,3.074,3.074,0,0,1-.494.786,1.9,1.9,0,0,1-.6.363,7.38,7.38,0,0,1-5.086.026A22,22,0,0,1,3.2,23.556,3.785,3.785,0,0,1,2.121,22.7a3.114,3.114,0,0,1-.52-1.756c-.068-1.338.183-2.684.026-4.017A27.693,27.693,0,0,0,.473,12.911a12.662,12.662,0,0,1,.3-7.778A5.83,5.83,0,0,1,2.551,2.441C4.409,1.022,7.109,1.586,9.261.685,10.871,0,12.894-.529,14.368.928Z" transform="translate(9.755 8.824)" fill="#ffd865" opacity="0.35"/>
        </g>
        <path id="Shape-40" data-name="Shape" d="M3.064,16A8.406,8.406,0,0,0,.048,23.387C1.028,32.519,3.971,53.3,11.324,64.98q.656,1.043,1.359,1.983H52.406s8.094-30.23,8.639-43.55a10.035,10.035,0,0,0-3.6-8.119C51.477,10.332,37.513-.48,29.582.238H29.42S26.4-3.193,3.064,16Z" transform="translate(144.881 28.868)" fill="#ffc107"/>
        <path id="Shape-41" data-name="Shape" d="M.052,23.379c.98,9.132,3.923,29.914,11.276,41.593,1.58.684,3.195,1.355,4.8,1.983,9.985,3.927,19.489,6.243,17.951,0a14.147,14.147,0,0,0-1.529-3.508c-9.112-15.9-4.9-50.567-2.982-63.2H29.4s-3.02-3.461-26.36,15.73A8.406,8.406,0,0,0,.052,23.379Z" transform="translate(144.877 28.876)" fill="none"/>
        <path id="Shape-42" data-name="Shape" d="M.052,23.379c.98,9.132,3.923,29.914,11.276,41.593,1.58.684,3.195,1.355,4.8,1.983,9.985,3.927,19.489,6.243,17.951,0a14.147,14.147,0,0,0-1.529-3.508c-9.112-15.9-4.9-50.567-2.982-63.2H29.4s-3.02-3.461-26.36,15.73A8.406,8.406,0,0,0,.052,23.379Z" transform="translate(144.877 28.876)" opacity="0.05"/>
        <path id="Shape-43" data-name="Shape" d="M0,7.807c0,1.752,1.487,3.372,4,4.671a24.507,24.507,0,0,0,5.4,1.936,45.7,45.7,0,0,0,10.7,1.2,42.958,42.958,0,0,0,12.826-1.795,17.985,17.985,0,0,0,4.8-2.256C39.3,10.444,40.2,9.166,40.2,7.8c0-1.983-1.908-3.8-5.052-5.175Q34.381,2.295,33.525,2A41.919,41.919,0,0,0,20.1,0C13.708,0,8.03,1.154,4.337,2.957a13.829,13.829,0,0,0-1.785,1.03C.929,5.12,0,6.423,0,7.807Z" transform="translate(157.329 86.959)" fill="#d6dbe6"/>
        <path id="Shape-44" data-name="Shape" d="M0,7.807c0,1.752,1.487,3.372,4,4.671a24.507,24.507,0,0,0,5.4,1.936,45.7,45.7,0,0,0,10.7,1.2,42.958,42.958,0,0,0,12.826-1.795,17.985,17.985,0,0,0,4.8-2.256C39.3,10.444,40.2,9.166,40.2,7.8c0-1.983-1.908-3.8-5.052-5.175Q34.381,2.295,33.525,2A41.919,41.919,0,0,0,20.1,0C13.708,0,8.03,1.154,4.337,2.957a13.829,13.829,0,0,0-1.785,1.03C.929,5.12,0,6.423,0,7.807Z" transform="translate(156.903 86.959)" fill="#ffc107"/>
        <path id="Shape-45" data-name="Shape" d="M6.371,9.812a5.222,5.222,0,0,0-1.38-6.649S3.619,1.5,4.458,0c0,0-7.02,4.649-3.442,10Z" transform="translate(174.903 87.079)" fill="#ffd865"/>
        <path id="Shape-46" data-name="Shape" d="M2.868,4.4a2.339,2.339,0,0,0-.622-2.982A1.391,1.391,0,0,1,2.008,0S-1.153,2.088.457,4.486Z" transform="translate(176.693 92.647)" fill="#ffd865"/>
        <path id="Shape-47" data-name="Shape" d="M2.868,4.4a2.339,2.339,0,0,0-.622-2.982A1.391,1.391,0,0,1,2.008,0S-1.153,2.088.457,4.486Z" transform="translate(176.693 92.647)" opacity="0.1"/>
        <path id="Shape-48" data-name="Shape" d="M0,10.478a24.507,24.507,0,0,0,5.4,1.936C11.131,11.081,27.553,6.786,31.144.632Q30.381.3,29.525,0C27.22,2.7,17.891,12.021,0,10.478Z" transform="translate(161.333 88.959)" fill="#e0b022"/>
        <path id="Shape-49" data-name="Shape" d="M0,1.03c2.13,3.885,22.19,8.209,30.36,9.829a17.985,17.985,0,0,0,4.8-2.256A72.661,72.661,0,0,1,1.785,0,13.829,13.829,0,0,0,0,1.03Z" transform="translate(159.894 89.921)" fill="#e0b022"/>
        <path id="Shape-50" data-name="Shape" d="M24.128,1.561c1.18,1.158.852,3.09.724,4.739a14.188,14.188,0,0,0,2.241,8.765c1.044,1.6,2.488,3.239,2.224,5.128s-2.228,3.167-3.272,4.842a8.916,8.916,0,0,0-.826,5.931c.3,2.017.929,3.983,1.091,6.013a2.717,2.717,0,0,1-.153,1.38,3.735,3.735,0,0,1-.976,1.094,7.718,7.718,0,0,0-1.64,2.081,5.165,5.165,0,0,1-.831,1.32,3.189,3.189,0,0,1-1.005.611,12.394,12.394,0,0,1-8.545.038,36.912,36.912,0,0,1-7.77-3.936A6.355,6.355,0,0,1,3.57,38.124a5.225,5.225,0,0,1-.878-2.949c-.115-2.248.311-4.513.043-6.748-.281-2.329-1.3-4.5-1.942-6.752a21.268,21.268,0,0,1,.5-13.06A9.837,9.837,0,0,1,4.277,4.1C7.4,1.715,11.945,2.676,15.548,1.146,18.236.005,21.632-.892,24.128,1.561Z" transform="translate(161.286 42.994)" fill="#fff" opacity="0.25"/>
        <path id="Shape-51" data-name="Shape" d="M1.316,234.118c-4.217-2.393,3.05-2.974,3.038-2.965,2.978-.675,5.432-4.273,5.432-4.273l.243.039L7.088,187.769s-3.119-5.692,0-13.94c.622-1.649,1.21-3.359,1.751-5.068l-.473-.2.094-.53L8.366,168s9.065-49.849,9.171-66.088a10.529,10.529,0,0,0-.524-4.034c-1.431-2.744-4-6.68-3.889-11.6-.094-4.786,2.3-10.564,10.905-17.094-.686-5.487-2.381-17-5.316-24.786a38.876,38.876,0,0,1,0-12.82l1.7-21.62S20.145,0,26.381,0,26.1,11.111,26.1,11.111l.567,28.162s.187,1.457.507,3.748a11.042,11.042,0,0,1,5.683-3.474,6.853,6.853,0,0,1,.426-3.029c.128.081.26.153.392.226.051-.171.106-.342.175-.508a8.5,8.5,0,0,0,4.426,1.283c1.426.008,2.832-.347,4.26-.454a12.421,12.421,0,0,1,6.939,1.552c.294-.03.592-.064.89-.112,5.581-.85,9.462,6.278,15.051,9.2,3.919,2.048,5.486,6.829,6.116,11.222s.7,9.059,2.983,12.859c1.559,2.6,5.048,4.093,5.7,7.055,1.278,5.769-.14,4.333-1.559,12.025-.469,2.539-1.074,3.551-1.674,6.064-.643,2.71.072,5.539.167,8.325.247,7.294-4.431,14.337-10.927,17.473a17.219,17.219,0,0,1-5.227,1.774,14.939,14.939,0,0,0,3.856,8.747c-.23.068-.439.129-.656.184l.089.1c-3.749,1.23-7.893-.193-11.194-2.355a25.939,25.939,0,0,1-2.757-2.085,24.908,24.908,0,0,1,1.244,3.727l.026.025.681-.166s-.2.111-.55.291c1.9,1.752,20.358,18.863,27.459,22.127,1.564.039,6.675,9.184-6.632,12.432-10.48,2.56-12.758-1.137-18.147,5.405a13.055,13.055,0,0,1-5.632,3.825c1.538,4.91,3.957,11.068,6.769,12.393,4.844,2.278,12.78,14.217,13.632,18.491l7.1,15.226h.131l1.444,1.552a2.606,2.606,0,0,1-.933,4.192c-4.115,1.645-10.811,3.931-13.84,2.79-4.532-1.709,2.556-3.418,2.556-3.418,2.841-1.141,4.26-4.837,4.26-4.837l-22.824-26.03S38.129,193.64,36.3,186.307c-.115-.457-1.462-4.06-3.011-8.15-1.444-.106-2.825-.243-4.077-.384a25.383,25.383,0,0,1-6.867-2.09c-1.474,5.008-2.748,10.449-2.207,12.9,1.133,5.12,2.556,11.65,0,20.2l-4.4,18.919h-.4l.451.068,1.172,1.739a2.622,2.622,0,0,1-1.593,4.026,48.557,48.557,0,0,1-9.854,1.365A8.938,8.938,0,0,1,1.316,234.118Z" transform="translate(154.185 94.211)" fill="url(#linear-gradient)"/>
        <path id="Shape-52" data-name="Shape" d="M30.219,4.1c2.445,4.149,2,11.735-1.393,25.606,0,0-3.881,10.568,3.881,19.465S42.13,65.838,42.13,65.838,66.5,80.983,69.572,87.8C65,77.654,80.017,92.183,62.641,96.423c-10.253,2.5-12.473-1.111-17.738,5.282s-17.184,5.555-24.669,4.726S0,96.7,0,96.7,14.134,36.92,11.076,31.078C8.192,25.553-2.181,15.053,18.138,1.455A8.541,8.541,0,0,1,30.219,4.1Z" transform="translate(163.003 164.631)" fill="#f0898b"/>
        <path id="Shape-53" data-name="Shape" d="M30.219,4.1c2.445,4.149,2,11.735-1.393,25.606,0,0-3.881,10.568,3.881,19.465S42.13,65.838,42.13,65.838,66.654,80.914,69.572,87.8c-4.3-10.149,10.445,4.38-6.931,8.619-10.253,2.5-12.473-1.111-17.738,5.282s-17.184,5.555-24.669,4.726S0,96.7,0,96.7,14.134,36.92,11.076,31.078C8.192,25.553-2.181,15.053,18.138,1.455A8.541,8.541,0,0,1,30.219,4.1Z" transform="translate(163.003 164.631)" fill="#ffdf9c"/>
        <path id="Shape-54" data-name="Shape" d="M30.219,4.1c2.445,4.149,2,11.735-1.393,25.606,0,0-3.881,10.568,3.881,19.465S42.13,65.838,42.13,65.838,66.654,80.914,69.572,87.8c-4.3-10.149,10.445,4.38-6.931,8.619-10.253,2.5-12.473-1.111-17.738,5.282s-17.184,5.555-24.669,4.726S0,96.7,0,96.7,14.134,36.92,11.076,31.078C8.192,25.553-2.181,15.053,18.138,1.455A8.541,8.541,0,0,1,30.219,4.1Z" transform="translate(163.003 164.631)" fill="#61dbb2"/>
        <path id="Shape-55" data-name="Shape" d="M18.313,5s3.6,16.128,8.315,18.35,12.473,13.9,13.3,18.072L47,56.588h-6.39L18.3,31.145S9.551,27.726,7.761,20.576C7.485,19.465,0,0,0,0Z" transform="translate(182.39 258.844)" fill="#fec2be"/>
        <path id="Shape-56" data-name="Shape" d="M19.647,9.731s-6.654,17.794-5.538,22.8,2.5,11.4,0,19.743l-4.3,18.487-5.538-.278L1.356,31.7s-3.05-5.555,0-13.624A153.5,153.5,0,0,0,6.6,0Z" transform="translate(160.267 249.114)" fill="#fec2be"/>
        <path id="Shape-57" data-name="Shape" d="M6.03,70.626S4.369,53.665.492,43.375a37.888,37.888,0,0,1,0-12.513L2.154,9.731S1.877,0,7.973,0,7.7,10.846,7.7,10.846l.554,27.529s3.6,28.085,6.1,31.145Z" transform="translate(172.5 97.292)" fill="#fec2be"/>
        <path id="Shape-58" data-name="Shape" d="M6.03,70.626S4.369,53.665.492,43.375a37.888,37.888,0,0,1,0-12.513L2.154,9.731S1.877,0,7.973,0,7.7,10.846,7.7,10.846l.554,27.529s3.6,28.085,6.1,31.145Z" transform="translate(172.5 97.292)" opacity="0.05"/>
        <path id="Shape-59" data-name="Shape" d="M2.219,0S3.327,13.346,0,17.794c0,0,7.761-4.171,14.411-.556,0,0-4.158-11.4-2.773-16.406Z" transform="translate(177.695 147.915)" fill="#fec2be"/>
        <path id="Shape-60" data-name="Shape" d="M30.351,4.1c2.445,4.149,3.668,11.735.273,25.606,0,0-5.538,10.568,2.219,19.465s9.423,16.666,9.423,16.666S62.777,85.025,69.708,87.8c0,0,3.327,6.115-6.931,8.619S50.3,95.312,45.039,101.7s-17.184,5.555-24.669,4.726S0,100.175,0,100.175s11.5-63.246,8.456-69.1C5.572,25.553-2.028,15.053,18.288,1.455A8.524,8.524,0,0,1,30.351,4.1Z" transform="translate(162.871 161.293)" fill="#3ad29f"/>
        <path id="Oval" d="M9.423,0A9.453,9.453,0,1,1,0,9.453,9.438,9.438,0,0,1,9.423,0Z" transform="translate(175.48 162.637)" fill="#fec2be"/>
        <path id="Shape-61" data-name="Shape" d="M10.646,3.776l1.938,29.2L6.194,64.116s5.819,20.576,0,18.628S.1,63.834.1,63.834L3.979,31.3S-.732,6.831.1,1.814,10.646,3.776,10.646,3.776Z" transform="translate(177.584 172.207)" opacity="0.1"/>
        <path id="Shape-62" data-name="Shape" d="M10.646,3.776l1.938,29.2L6.194,64.116s5.819,20.576,0,18.628S.1,63.834.1,63.834L3.979,31.3S-.732,6.831.1,1.814,10.646,3.776,10.646,3.776Z" transform="translate(177.584 171.651)" fill="#fec2be"/>
        <path id="Shape-63" data-name="Shape" d="M9.546,8.5C5.623,8.5,2.053,7.372.175,4.222.149,1.765,0,0,0,0L9.423.855c-.6,2.137-.268,3.983.426,7.09C9.649,7.949,9.721,8.5,9.546,8.5Z" transform="translate(179.932 148.441)" opacity="0.03"/>
        <path id="Oval-2" data-name="Oval" d="M10.812,0A10.846,10.846,0,1,1,0,10.846,10.829,10.829,0,0,1,10.812,0Z" transform="translate(178.526 135.663)" fill="#fec2be"/>
        <path id="Shape-64" data-name="Shape" d="M6.236,0S5.384,4.158,0,4.576" transform="translate(171.323 188.359)" opacity="0.03"/>
        <path id="Shape-65" data-name="Shape" d="M21.108,101.707c5.265-6.41,7.485-2.782,17.738-5.282s6.931-8.619,6.931-8.619C38.846,85.023,18.334,65.84,18.334,65.84s-1.661-7.786-9.423-16.666S6.692,29.709,6.692,29.709C10.1,15.841,8.869,8.252,6.42,4.1A8.33,8.33,0,0,0,0,.047,8.392,8.392,0,0,1,8.094,4.1c2.445,4.149,3.668,11.735.273,25.606,0,0-5.538,10.568,2.219,19.465S20.009,65.84,20.009,65.84,40.52,85.028,47.45,87.805c0,0,3.327,6.115-6.931,8.619s-12.473-1.111-17.738,5.282c-3.642,4.423-10.462,5.389-16.8,5.286C11.808,106.9,17.785,105.745,21.108,101.707Z" transform="translate(185.137 161.308)" opacity="0.03"/>
        <path id="Shape-66" data-name="Shape" d="M.211,26.076a8.733,8.733,0,0,1,1.657-1.927c1.827-2.081,1.512-5.2,1.619-7.974A21.784,21.784,0,0,1,5.229,8.483,6.51,6.51,0,0,1,3.469,7.2,6.939,6.939,0,0,1,2.051,0,8.308,8.308,0,0,0,6.375,1.226c1.4,0,2.773-.338,4.17-.427a12.147,12.147,0,0,1,6.786,1.517c.29-.03.579-.064.852-.111,5.457-.829,9.248,6.141,14.709,9,3.834,2,5.38,6.679,5.964,10.97s.673,8.854,2.9,12.568c1.525,2.538,4.937,4,5.576,6.9,1.248,5.641-.136,4.248-1.521,11.756-.46,2.483-1.052,3.474-1.636,5.927-.63,2.65.068,5.414.162,8.119.3,8.94-6.961,17.5-15.808,18.623a14.6,14.6,0,0,0,3.834,8.752c-3.663,1.205-7.715-.188-10.944-2.3A26.3,26.3,0,0,1,10.634,77.776c-2.177-7.752-.677-15.991-.332-24.038s-.92-17-7.02-22.222C1.561,30.046-.705,28.123.211,26.076Z" transform="translate(185.204 133.014)" opacity="0.1"/>
        <path id="Shape-67" data-name="Shape" d="M.211,26.076a8.733,8.733,0,0,1,1.657-1.927c1.827-2.081,1.512-5.2,1.619-7.974A21.784,21.784,0,0,1,5.229,8.483,6.51,6.51,0,0,1,3.47,7.2,6.939,6.939,0,0,1,2.051,0,8.309,8.309,0,0,0,6.379,1.256c1.4,0,2.773-.338,4.17-.427a12.147,12.147,0,0,1,6.773,1.487c.29-.03.579-.064.852-.111,5.457-.829,9.248,6.141,14.709,9,3.834,2,5.38,6.679,5.964,10.97s.673,8.854,2.9,12.568c1.525,2.538,4.937,4,5.576,6.9,1.248,5.641-.136,4.248-1.521,11.756-.46,2.483-1.052,3.474-1.636,5.927-.63,2.65.068,5.414.162,8.119.3,8.94-6.961,17.5-15.808,18.623A14.6,14.6,0,0,0,32.3,94.805c-3.663,1.205-7.715-.188-10.944-2.3a26.3,26.3,0,0,1-10.8-14.747C8.385,70,9.885,61.763,10.23,53.717s-.92-17-7.02-22.222C1.561,30.046-.705,28.123.211,26.076Z" transform="translate(185.757 132.736)" fill="#252a62"/>
        <path id="Shape-68" data-name="Shape" d="M8.136.278S6.751,3.893,3.978,5c0,0-6.931,1.667-2.5,3.338,2.982,1.115,9.5-1.12,13.529-2.726a2.568,2.568,0,0,0,.912-4.1L14.513,0Z" transform="translate(214.88 315.155)" fill="#4c4981"/>
        <path id="Shape-69" data-name="Shape" d="M9.576,0s-2.4,3.517-5.308,4.184c0,0-7.105.568-2.982,2.906,2.743,1.556,9.525.385,13.751-.577a2.566,2.566,0,0,0,1.555-3.936L15.447.868Z" transform="translate(154.679 319.043)" fill="#4c4981"/>
        <path id="Shape-70" data-name="Shape" d="M13.58,0A28.867,28.867,0,0,1,0,3.327" transform="translate(192.251 227.007)" opacity="0.03"/>
        <path id="Shape-71" data-name="Shape" d="M2.289,10.74A6.807,6.807,0,0,1,.074,7.39,2.988,2.988,0,0,1,1.621,3.971C3.039,3.424,4.56,4.4,5.71,5.411S8.181,7.548,9.684,7.334a6.084,6.084,0,0,1-1.87-5.684A2.38,2.38,0,0,1,8.334.5c.788-.855,2.219-.483,3.161.184,2.982,2.137,3.834,6.209,3.855,9.893A18.879,18.879,0,0,0,15.405,6.5,4.2,4.2,0,0,1,16.93,2.89a4.584,4.584,0,0,1,2.347-.543,4.789,4.789,0,0,1,3.774,1.077C24.2,4.655,23.9,6.719,22.9,8.074A14.749,14.749,0,0,1,19,11.215a8.676,8.676,0,0,0-2.79,2.671,2.65,2.65,0,0,0-.209.479H7.52A23.581,23.581,0,0,1,2.289,10.74Z" transform="translate(238.328 318.64)" fill="#f7ac9f"/>
        <path id="Shape-72" data-name="Shape" d="M0,7.76c0,4.389,7.919,17.094,7.919,17.094S15.838,12.132,15.838,7.76A7.919,7.919,0,0,0,0,7.76Z" transform="translate(275.621 169.086)" fill="#ffc107"/>
        <path id="Shape-73" data-name="Shape" d="M1.167,12.1C3.544,15.782,17.081,22.14,17.081,22.14s-.247-15-2.624-18.679A7.926,7.926,0,0,0,1.167,12.094Z" transform="translate(261.368 189.047)" fill="#ffc107"/>
        <path id="Shape-74" data-name="Shape" d="M4.219,14.966c3.906,1.974,18.79.611,18.79.611S15.252,2.757,11.345.783A7.939,7.939,0,0,0,4.214,14.966Z" transform="translate(258.887 227.703)" fill="#ffc107"/>
        <path id="Shape-75" data-name="Shape" d="M3.261,14.369c3.514,2.607,18.42,3.786,18.42,3.786s-5.487-13.948-9-16.559A7.935,7.935,0,1,0,3.261,14.369Z" transform="translate(267.329 259.612)" fill="#ffc107"/>
        <path id="Shape-76" data-name="Shape" d="M17.751,13.644C14.616,16.7,0,19.866,0,19.866S3.578,5.306,6.714,2.247a7.933,7.933,0,0,1,11.037,11.4Z" transform="translate(277.342 198.394)" fill="#ffc107"/>
        <path id="Shape-77" data-name="Shape" d="M18.79,15.126C14.884,17.1,0,15.737,0,15.737S7.757,2.917,11.663.943A7.939,7.939,0,1,1,18.79,15.126Z" transform="translate(284.575 233.641)" fill="#ffc107"/>
        <path id="Shape-78" data-name="Shape" d="M18.42,14.294C14.905,16.9,0,18.08,0,18.08S5.487,4.131,9,1.52A7.935,7.935,0,0,1,18.42,14.294Z" transform="translate(288.119 271.302)" fill="#ffc107"/>
        <g id="Group_6" data-name="Group 6" transform="translate(258.4 168.681)">
          <path id="Shape-79" data-name="Shape" d="M7.6,114.275S18.112,78.481,5.631,52.135A56.685,56.685,0,0,1,1.073,16.666,95.309,95.309,0,0,1,6.078,0" transform="translate(18.908 24.785)" fill="none" stroke="#535461" stroke-miterlimit="10" stroke-width="0.714" opacity="0.6"/>
          <path id="Shape-80" data-name="Shape" d="M0,7.76c0,4.389,7.919,17.094,7.919,17.094S15.838,12.132,15.838,7.76A7.919,7.919,0,0,0,0,7.76Z" transform="translate(17.221 0.406)" fill="#a3d8d3"/>
          <path id="Shape-81" data-name="Shape" d="M1.167,12.1C3.544,15.782,17.081,22.14,17.081,22.14s-.247-15-2.624-18.679A7.926,7.926,0,0,0,1.167,12.094Z" transform="translate(2.968 20.366)" fill="#a3d8d3"/>
          <path id="Shape-82" data-name="Shape" d="M4.219,14.966c3.906,1.974,18.79.611,18.79.611S15.252,2.757,11.345.783A7.939,7.939,0,0,0,4.214,14.966Z" transform="translate(0.487 59.022)" fill="#a3d8d3"/>
          <path id="Shape-83" data-name="Shape" d="M3.261,14.369c3.514,2.607,18.42,3.786,18.42,3.786s-5.487-13.948-9-16.559A7.935,7.935,0,1,0,3.261,14.369Z" transform="translate(8.929 90.931)" fill="#a3d8d3"/>
          <path id="Shape-84" data-name="Shape" d="M17.751,13.644C14.616,16.7,0,19.866,0,19.866S3.578,5.306,6.714,2.247a7.933,7.933,0,0,1,11.037,11.4Z" transform="translate(18.942 29.713)" fill="#a3d8d3"/>
          <path id="Shape-85" data-name="Shape" d="M18.79,15.126C14.884,17.1,0,15.737,0,15.737S7.757,2.917,11.663.943A7.939,7.939,0,1,1,18.79,15.126Z" transform="translate(26.175 64.96)" fill="#a3d8d3"/>
          <path id="Shape-86" data-name="Shape" d="M18.42,14.294C14.905,16.9,0,18.08,0,18.08S5.487,4.131,9,1.52A7.935,7.935,0,0,1,18.42,14.294Z" transform="translate(29.719 102.621)" fill="#a3d8d3"/>
        </g>
      </g>
    </g>
  </svg>
  `,
  },
];

const IntroLogin = ({ notNewUser }) => {

  const renderItem = ({ item }) => {
    return (
      <View style={styles.container}>
        <View style={{ gap: 10 }}>
          <Text style={styles.account}>Log in to your account</Text>
          <Text style={styles.title}>{ item.title }</Text>
        </View>
        <View>
          <SvgXml xml={item.img} width="100%" />
        </View>

      </View>
    )
  }

  const onDone = () => {
    notNewUser();
  }

  return (
    <SafeAreaView style={styles.body}>
      <AppIntroSlider
        data={data}
        renderItem={renderItem}
        onDone={onDone}
        nextLabel=''
        doneLabel=''
      />
    </SafeAreaView>
  )
}

export default IntroLogin

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 30,

    width: "90%",
    marginHorizontal: "5%",
  },
  account: {
    color: "#707070",
    fontSize: 15,
  },
  title: {
    color: "#3AD29F",
    fontSize: 30,
    fontWeight: "400",
  },
})