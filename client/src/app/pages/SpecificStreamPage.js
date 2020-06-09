import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser'

import { useAuth, useFirestore } from '../services';

import './SpecificStreamPage.scss';

const SpecificStreamPage = () => {
  const [streamData, setStreamData] = useState(false);
  let { streamID } = useParams();
  const {getSpecificStream} = useFirestore();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSpecificStream(streamID);
      setStreamData(data);
    };

    fetchData();
  }, []);

  return(
    <div className="page specStream">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="specStream__iframe">
              {(streamData) ? 
                ReactHtmlParser(streamData.iframe)
                : 
                <div className="text-center">
                  <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              }
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">

          </div>
        </div>
      </div>
    </div>
  );
}
export default SpecificStreamPage;