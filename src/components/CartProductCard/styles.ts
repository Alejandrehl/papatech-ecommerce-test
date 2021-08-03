import { StyleSheet } from 'react-native'

const TYPE_TEXT_COLOR = 'gray'

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: '4%',
    borderRadius: 30,
    marginBottom: 10,
  },
  content: {
    flexDirection: 'row',
  },
  infoView: {
    flex: 1,
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  typeText: {
    fontSize: 14,
    color: TYPE_TEXT_COLOR,
  },
  amountView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topViewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityText: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: '5%',
  },
})
