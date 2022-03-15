import React from "react";
import "./Title.css";
import Row from "react-bootstrap/Row";

const Title = ({ content }) => {
  return (
    <Row className="py-5 g-0">
      <ol>
        <li> https://www.mrcmekong.org/about/mekong-basin/people/</li>
        <li> http://www.mwr.gov.cn/xw/slyw/201804/t20180409_1034896.html</li>
        <li>
          https://nhess.copernicus.org/preprints/nhess-2021-65/nhess-2021-65.pdf
        </li>
        <li> https://pubs.iclarm.net/resource_centre/3494-11879-1-PB.pdf</li>
        <li>
          https://earthobservatory.nasa.gov/images/3483/tonle-sap-wetlands-cambodia
        </li>
        <li>
          https://www.aljazeera.com/news/2019/12/13/beautifying-phnom-penh-muslim-cham-face-eviction-in-cambodia{" "}
        </li>
        <li> https://www.mrcmekong.org/news-and-events/news/pr-09-12-2021/</li>
        <li> https://www.mrcmekong.org/news-and-events/news/pr-18112021/</li>
        <li> https://world.huanqiu.com/article/9CaKrnKooZN</li>
        <li>
          https://thediplomat.com/2018/12/the-trouble-with-the-lancang-mekong-cooperation-forum/
        </li>
        <li>
          https://iwaponline.com/wp/article-abstract/18/6/1420/20520/Damming-the-Mekong-tributaries-water-security-and
        </li>
      </ol>
    </Row>
  );
};

export default Title;
