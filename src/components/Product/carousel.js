import React, {Component} from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@material-ui/core';
import '../../css/about.scss';
import carouselimage1 from '../../images/delibird-carousel-01.gif';
import carouselimage2 from '../../images/delibird-carousel-02.gif';
import carouselimage3 from '../../images/delibird-carousel-03.gif';


class DelibirdCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    var items = [
      {
          name: "자율주행 매장 지도 생성 서비스",
          description: "테이블 위치가 바뀌더라도 걱정하지 마세요!",
          url: carouselimage1,
      },
      {
          name: "원격 관제 서비스",
          description: "앉은 자리에서 클릭 한번으로 로봇을 제어해보세요!",
          url: carouselimage2,
      },
      {
        name: "청소 서비스",
        description: "자율주행으로 꼼꼼히 청소하는 딜리버드를 경험해보세요!",
        url: carouselimage3,
      },
  ]
    return ( 
      <Carousel autoPlay={false} navButtonsAlwaysvisible={true} animation="slide" timeout={300}>
        {items.map( (item, i) => <Item key={i} item={item} /> )}
      </Carousel>
    );
  }
}
export default DelibirdCarousel;

function Item(props)
{

    return (
        <Paper style={{backgroundColor: "white"}} className="delibird-carousel-paper-form">
            <div className="description-form">
              <div className="description-title">{props.item.name}</div>
              <p>{props.item.description}</p>
            </div>
            <div className="img" style={{
              backgroundImage: `url(${props.item.url})`,
              }}
            />
        </Paper>
    )
}