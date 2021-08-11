import { StyleSheet } from 'react-native'

const BORDER_COLOR = 'black'
const TYPE_COLOR = 'gray'

export default StyleSheet.create({
  container: {
    flex: 1 / 2,
    alignItems: 'center',
    marginHorizontal: 5,
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    shadowColor: BORDER_COLOR,
    shadowOffset: {
      width: 5,
      height: 10
    },
    shadowOpacity: 20,
    shadowRadius: 10,
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
