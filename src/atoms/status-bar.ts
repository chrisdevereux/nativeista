import { View } from 'react-native'
import {
  Dimensions,
  Platform,
  StatusBar as NativeStatusBar,
} from 'react-native'
import { styled } from '../util'

const X_WIDTH = 375
const X_HEIGHT = 812

const XSMAX_WIDTH = 414
const XSMAX_HEIGHT = 896

const { height: W_HEIGHT, width: W_WIDTH } = Dimensions.get('window')

let isIPhoneX = false

if (
  Platform.OS === 'ios' &&
  !(Platform as any).isPad &&
  !(Platform as any).isTVOS
) {
  isIPhoneX =
    (W_WIDTH === X_WIDTH && W_HEIGHT === X_HEIGHT) ||
    (W_WIDTH === XSMAX_WIDTH && W_HEIGHT === XSMAX_HEIGHT)
}

const height = Platform.select({
  ios: isIPhoneX ? 44 : 20,
  android: NativeStatusBar.currentHeight,
  default: 0,
})

export const StatusBar = Object.assign(
  styled(View)({
    textAlign: 'center',
    height,
  }),
  { height },
)
