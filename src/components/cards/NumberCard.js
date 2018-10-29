// import React, {Component} from 'react';
// import { Button } from "semantic-ui-react";
// import * as style from "./Card.css";
// import CellGroup from "../basic/CellGroup";
// import CardInput from "./card-elements/CardInput";
// import BaseStyle from "../basic/Base.css";
//
// class NumberCard extends Component {
//     render() {
//         return (
//             <div className={style.card}>
//                 <CellGroup
//                     values={this.state.letters}
//                     maxLength={MAX_LETTERS_LENGTH}
//                     cellClick={this.cellClick}
//                     returnedValue={this.state.returnedValue}
//                 />
//
//                 <CardInput backspaceClick={this.popInputValue} value={this.state.currentValue}/>
//
//                 <Button.Group >
//                     <Button className={BaseStyle.responsiveFont}  disabled={this.props.level.started}
//                             onClick={this.getVowel}>Гласная</Button>
//                     <Button className={BaseStyle.responsiveFont} disabled={this.props.level.started}
//                             onClick={this.getConsonant}>Согласная</Button>
//                 </Button.Group>
//             </div>
//         );
//     }
// }
//
// export default NumberCard;
