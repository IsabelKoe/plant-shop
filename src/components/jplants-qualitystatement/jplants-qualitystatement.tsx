import { Component, h, Prop} from '@stencil/core';

@Component({
  tag: 'jplants-qualitystatement',
  styleUrl: 'jplants-qualitystatement.css',
  shadow: true,
})
export class JplantsQualitystatement {
@Prop() imgsrc: string;

@Prop() text: string;

  render() {
    return (
      <JplantsQualitystatement>
        <div class ="container qualitystatement">
          {/* <img class="image-quality" src="../../images/sendWithLove.png" alt={this.text}/> */}
          <h3 class="header-quality">{this.text}</h3>
        </div>
      </JplantsQualitystatement>
    );
  }

}
