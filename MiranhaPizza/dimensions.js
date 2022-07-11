import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const escalaHorizontal = Math.floor((width - 80) / 200);
const escalaVertical = Math.floor((height - 180) / 200);

const positionHorizontal = (position) => {
    let novaPosi = position;
    if (position < 0) {
        novaPosi =  -1 * (-100 + position);
    }
    console.log(Math.floor(novaPosi * escalaHorizontal))
    return novaPosi;
}

const positionVertical = (position) => {
    let novaPosi = position;
    if (position < 0) {
        novaPosi =  -1 * (-100 + position);
    }
    console.log(Math.floor(novaPosi * escalaVertical))
    return novaPosi;
}

export default {
positionHorizontal,
positionVertical
};
