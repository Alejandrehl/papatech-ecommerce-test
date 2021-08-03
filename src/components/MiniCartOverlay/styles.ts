import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    width: '80%',
    height: '50%',
    borderRadius: 30,
  },
  content: {
    flex: 1,
    padding: '5%',
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    borderRadius: 50,
  },
  buttonTitle: {
    paddingHorizontal: 15,
  },
  totalText: {
    textAlign: 'right',
    paddingBottom: '5%',
  },
  scrollView: {
    flex: 1,
    paddingBottom: '20%',
    marginVertical: '5%',
  },
  emptyCartContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyCartText: {
    fontSize: 18,
  },
})
