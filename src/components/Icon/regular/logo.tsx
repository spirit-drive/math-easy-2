import * as React from 'react';
import { Svg } from '../Svg';

const Logo: React.FC = () => (
  <Svg>
    <path
      d="M7.377,20.147c-.055-.1-.127-.1-.216-.1H.472A.475.475,0,0,1,0,19.568V9.5a.475.475,0,0,1,.472-.478H.653A.163.163,0,0,1,.767,9.3a.161.161,0,0,1-.115.048H.578a.238.238,0,0,0-.236.239v9.644a.475.475,0,0,0,.472.478H7.327c.155,0,.282.008.308.211.006.049.109.12.168.12.306.008,1.683.008,2,0,.06,0,.084-.071.09-.12.026-.2.151-.211.309-.211h6.513a.475.475,0,0,0,.472-.478V9.582a.238.238,0,0,0-.236-.239h-.072a.164.164,0,0,1,0-.328h.181a.475.475,0,0,1,.472.478V19.564a.475.475,0,0,1-.472.478H10.369c-.089,0-.161,0-.216.1-.083.157-.155.233-.333.233-.327,0-1.709,0-2.032,0A.444.444,0,0,1,7.377,20.147Zm4.73-1.639a4.209,4.209,0,0,1,1.83-.7c.383-.06,1.064-.06,1.229-.5a.765.765,0,0,0,.028-.257V10.3a.145.145,0,0,1,.059-.117.141.141,0,0,1,.128-.021,2.91,2.91,0,0,0,.3.086c.128.028.16.086.16.216v7.909a.256.256,0,0,1-.02.12.157.157,0,0,1-.148.075.57.57,0,0,1-.17-.03,4.29,4.29,0,0,0-2.7.013c-.193.051-.386.11-.582.147a.249.249,0,0,1-.046,0C12.049,18.705,11.989,18.593,12.107,18.508Zm-6.4.193c-.2-.037-.39-.1-.582-.147a5.6,5.6,0,0,0-3.093-.013.567.567,0,0,1-.167.03A.157.157,0,0,1,1.72,18.5a.251.251,0,0,1-.02-.12V12.134q0-.833,0-1.666c0-.13.032-.189.161-.216a2.911,2.911,0,0,0,.3-.086.141.141,0,0,1,.128.021.145.145,0,0,1,.059.117v6.744a.745.745,0,0,0,.028.257c.179.481,1,.4,1.386.444a4.321,4.321,0,0,1,2.066.76c.118.085.057.2-.072.2A.249.249,0,0,1,5.711,18.7Zm3.211-1.784-.312,0a.259.259,0,0,1-.254-.264l.07-6.686s-.167-.036-.248-.059a2.615,2.615,0,0,1,.455-5.111,2.444,2.444,0,0,1,1.815.533,2.607,2.607,0,0,1,.793,3.08A2.537,2.537,0,0,1,9.5,9.923l-.219.043c-.008.814-.024,3.187-.03,3.809a.262.262,0,0,0,.074.185.256.256,0,0,0,.182.078l.966,0a.259.259,0,0,1,.256.261v.245a.259.259,0,0,1-.258.261H9.889a.26.26,0,0,0-.258.258h0a.263.263,0,0,0,.074.186.256.256,0,0,0,.183.077h.578a.259.259,0,0,1,.258.261v.253a.259.259,0,0,1-.258.261H9.444a.259.259,0,0,0-.257.257l0,.3a.259.259,0,0,1-.257.257ZM8.561,5.6a1.828,1.828,0,0,0-.035,3.568h0a1.26,1.26,0,0,0,.67.007,1.828,1.828,0,0,0,.035-3.568A1.265,1.265,0,0,0,8.561,5.6Zm3.02,7.137-.613-.973a.177.177,0,0,1-.017-.133.174.174,0,0,1,.081-.106.17.17,0,0,1,.131-.018.172.172,0,0,1,.1.082l.612.972a.176.176,0,0,1-.063.239.17.17,0,0,1-.087.024A.172.172,0,0,1,11.581,12.741Zm-5.7.051a.179.179,0,0,1-.081-.11.187.187,0,0,1,.018-.137l.652-.964a.173.173,0,0,1,.1-.084.166.166,0,0,1,.131.018.179.179,0,0,1,.081.11.187.187,0,0,1-.018.137l-.652.964a.173.173,0,0,1-.1.084.166.166,0,0,1-.131-.018Zm7.883-1.966-1.08-.66a.174.174,0,0,1-.081-.106.176.176,0,0,1,.018-.133.173.173,0,0,1,.1-.082.17.17,0,0,1,.131.018l1.08.66a.174.174,0,0,1,.081.106.176.176,0,0,1-.018.133.173.173,0,0,1-.1.081.17.17,0,0,1-.131-.018ZM3.628,10.7a.176.176,0,0,1-.018-.133.174.174,0,0,1,.081-.106l1.2-.621a.17.17,0,0,1,.131-.018.173.173,0,0,1,.1.082.176.176,0,0,1,.018.133.174.174,0,0,1-.081.106l-1.2.621a.17.17,0,0,1-.086.024A.172.172,0,0,1,3.628,10.7Zm8.9-2.957a.1.1,0,0,1,0-.2H16.14a.1.1,0,0,1,0,.2Zm-10.685-.1a.1.1,0,0,1,0-.2h3.38a.1.1,0,0,1,0,.2ZM4.9,5.589,2.6,4.251a.174.174,0,0,1-.081-.106.176.176,0,0,1,.018-.133.172.172,0,0,1,.1-.082.17.17,0,0,1,.131.018l2.3,1.338a.174.174,0,0,1,.081.106.176.176,0,0,1-.018.133.173.173,0,0,1-.1.082A.17.17,0,0,1,4.9,5.589Zm7.81-.041a.172.172,0,0,1-.1-.082.176.176,0,0,1-.018-.133.174.174,0,0,1,.081-.106l2.221-1.418a.172.172,0,0,1,.236.064.176.176,0,0,1,.018.133.174.174,0,0,1-.081.106L12.843,5.53a.17.17,0,0,1-.131.018ZM6.6,3.863a.172.172,0,0,1-.1-.082L5.21,1.372a.176.176,0,0,1,.063-.239.171.171,0,0,1,.235.064L6.791,3.606a.176.176,0,0,1,.018.133.174.174,0,0,1-.081.106.17.17,0,0,1-.131.018Zm4.456-.046a.176.176,0,0,1-.063-.239l1.36-2.449a.172.172,0,0,1,.1-.082.17.17,0,0,1,.131.018.174.174,0,0,1,.081.106.176.176,0,0,1-.018.133l-1.36,2.449a.172.172,0,0,1-.1.082.17.17,0,0,1-.131-.018ZM8.719,3.05V.175a.172.172,0,1,1,.345,0V3.05a.172.172,0,1,1-.345,0Z"
      transform="translate(3.235 1.81)"
    />
  </Svg>
);

export default Logo;