import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser'

import { useAuth, useFirestore } from '../services';
import { Chat } from '../components';

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
          <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
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
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
              <Chat docID={streamID} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default SpecificStreamPage;