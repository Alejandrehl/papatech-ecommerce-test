import { StyleSheet } from 'react-native'

const BORDER_COLOR = 'silver'
const TYPE_COLOR = 'gray'

export default StyleSheet.create({
  container: {
    flex: 1 / 2,
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    marginHorizontal: 5,
    padding: 10,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  infoContainer: {
    flex: 1,
    marginVertical: 5,
  },
  typeText: {
    fontSize: 14,
    textAlign: 'center',
    color: TYPE_COLOR,
    marginBottom: 5,
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  priceText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    borderRadius: 50,
  },
  buttonTitle: {
    paddingHorizontal: 15,
  },
})
