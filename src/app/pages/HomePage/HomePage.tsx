import { Epath } from 'app/routes/routesConfig';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getProductTest } from 'store/test/TestSlice';
import { RootState } from 'types/RootState';

type Props = {};

const HomePage = (props: Props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductTest({}));
  }, []);

  const { loading, dataPro } = useSelector((state: RootState) => state.test);
  console.log('🚀 ~ HomePage ~ loading:', loading);
  console.log('🚀 ~ HomePage ~ dataPro:', dataPro);
  return (
    <div>
      HomePage
      <button
        onClick={() => {
          history.push(Epath.testPage);
        }}
        className="border-[2px] border-red-600  py-4 px-6 ml-2"
      >
        {loading ? 'Loading...' : 'Test Page 1'}
      </button>
    </div>
  );
};

export default HomePage;
