import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import NavButton from '../../components/UI/NavButton'
import Switch from '../UI/Switch';
import Card from '../Card';
import Offer from '../../components/Offer'
import Plate from '../Plate';
import { onHideCityPopup } from '../../store/actions'
import {
  navButtonsData,
  cardsData,
  offersData,
  platesData
} from '../../data/Data'
import '../../css/PartnersPage.css'

const PartnersPage = ({
  onHideCityPopup,
  isCitySelectPopupVisible,
  history
}) => {

  const demoActionHandler = () => {
    history.push('/action')
  }

  return (
    <div
      className='page'
      onClick={isCitySelectPopupVisible ? onHideCityPopup : null}
    >
      <div className='page__content'>

        <div className='contentblock title '>
          Партнеры и предложения
        </div>

        <div className='contentblock buttons-nav mt30'>
          {navButtonsData.map(item => {
            return (
              <NavButton
                title={item}
                onClick={demoActionHandler}
                key={Math.random() + item}
              />
            )
          })}
        </div>

        <div className='contentblock type-switcher mt30'>
          <Switch
            leftText={'Начисляют Спасибо'}
            rightText={'Принимают Спасибо'}
          />
        </div>

        <div className='contentblock cards mt60'>
          <div className='cards__content'>
            {cardsData.map(card => {
              return (
                <Card
                  percent={card.percent}
                  name={card.name}
                  logo={card.logo}
                  onClick={demoActionHandler}
                  key={Math.random() + card.name}
                />
              )
            })}
          </div>
          <div className='contentblock cards__button-more mt30'>
            <NavButton
              title={'Еще 4 партнера'}
              active={true}
              onClick={demoActionHandler}
            />
          </div>
        </div>

        <div className='contentblock subtitle-l mt110'>
          3 предложения в категории «Электроника и бытовая техника»
        </div>

        <div className='contentblock offers mt40'>
          <div className='offers__content'>
            {offersData.map(offer => {
              return (
                <Offer
                  preview={offer.preview}
                  logo={offer.logo}
                  name={offer.name}
                  text={offer.text}
                  onClick={demoActionHandler}
                />
              )
            })}
          </div>
          <div className='offers__button-more mt30 '>
            <NavButton
              title={'Еще 4 предложения'}
              active={true}
              onClick={demoActionHandler} />
          </div>
        </div>

        <div className='contentblock plates mt60'>
          {platesData.map(plate => {
            return (
              <Plate
                text={plate.text}
                content={plate.content}
                onClick={demoActionHandler}
              />
            )
          })}
        </div>

      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentCity: state.currentCity,
  isCitySelectPopupVisible: state.isCitySelectPopupVisible
});

const mapDispatchToProps = (dispatch) => ({
  onHideCityPopup: () => dispatch(onHideCityPopup()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PartnersPage));
