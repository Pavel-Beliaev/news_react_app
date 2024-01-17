import React, { FC } from 'react';
import { Image } from '../../components';
import {
  ArticleHeading,
  ArticlePoster,
  OriginLink,
  ShareBar,
} from '../../components/ArticleComponents';

export const ArticlePage: FC = () => {
  return (
    <div className='flex flex-col gap-y-3.5 my-3.5'>
      <ArticleHeading
        title='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        subTitle='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolore facere fugiat ipsum, nobis officiis.'
      />
      <OriginLink url='/' />
      <ShareBar />
      <ArticlePoster
        img='https://static01.nyt.com/images/2024/01/16/us/politics/16pol-nh-next-haley/16pol-nh-next-haley-superJumbo.jpg'
        description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eaque illum ipsam libero, maxime natus praesentium quidem quos ratione veniam? Ab accusantium, ad at consectetur consequatur dolorum ea modi sint.'
      />
      <div className='container'>
        <p>by...</p>
        <p>time</p>
      </div>
      <div className='container flex flex-col gap-y-2.5'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          adipisci animi aperiam, architecto consequuntur cumque ducimus enim
          esse eum exercitationem expedita, laboriosam laborum magnam modi
          pariatur perspiciatis rerum, tempora veritatis?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad
          adipisci alias debitis dolorum eligendi ex fuga illo libero nihil
          nobis officia praesentium rem soluta ullam, vitae voluptate
          voluptatibus! Ad amet aperiam blanditiis consequuntur corporis
          distinctio dolores ea et fugiat inventore iure iusto labore magni,
          molestiae odio, officiis provident quae, qui quo quod quos repellendus
          repudiandae sed suscipit veritatis voluptatum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          aspernatur consequatur enim, error eum facere facilis, ipsam libero
          nobis optio, qui reiciendis. Consequuntur dolorem doloribus facere
          ipsa nulla quis. Sunt?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
          eaque expedita ipsum nemo neque nostrum odio, quod reprehenderit sed
          veritatis!
        </p>
      </div>
      <div className='container flex flex-col gap-y-2.5'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          adipisci animi aperiam, architecto consequuntur cumque ducimus enim
          esse eum exercitationem expedita, laboriosam laborum magnam modi
          pariatur perspiciatis rerum, tempora veritatis?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad
          adipisci alias debitis dolorum eligendi ex fuga illo libero nihil
          nobis officia praesentium rem soluta ullam, vitae voluptate
          voluptatibus! Ad amet aperiam blanditiis consequuntur corporis
          distinctio dolores ea et fugiat inventore iure iusto labore magni,
          molestiae odio, officiis provident quae, qui quo quod quos repellendus
          repudiandae sed suscipit veritatis voluptatum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          aspernatur consequatur enim, error eum facere facilis, ipsam libero
          nobis optio, qui reiciendis. Consequuntur dolorem doloribus facere
          ipsa nulla quis. Sunt?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
          eaque expedita ipsum nemo neque nostrum odio, quod reprehenderit sed
          veritatis!
        </p>
      </div>
      <div className='container flex flex-col gap-y-2.5'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          adipisci animi aperiam, architecto consequuntur cumque ducimus enim
          esse eum exercitationem expedita, laboriosam laborum magnam modi
          pariatur perspiciatis rerum, tempora veritatis?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad
          adipisci alias debitis dolorum eligendi ex fuga illo libero nihil
          nobis officia praesentium rem soluta ullam, vitae voluptate
          voluptatibus! Ad amet aperiam blanditiis consequuntur corporis
          distinctio dolores ea et fugiat inventore iure iusto labore magni,
          molestiae odio, officiis provident quae, qui quo quod quos repellendus
          repudiandae sed suscipit veritatis voluptatum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          aspernatur consequatur enim, error eum facere facilis, ipsam libero
          nobis optio, qui reiciendis. Consequuntur dolorem doloribus facere
          ipsa nulla quis. Sunt?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
          eaque expedita ipsum nemo neque nostrum odio, quod reprehenderit sed
          veritatis!
        </p>
      </div>
    </div>
  );
};
