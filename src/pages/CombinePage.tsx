import React from 'react';
import Nav from '../components/Nav/Nav';
import { Route, Routes } from 'react-router-dom';
import MyPage from '../components/MyPage/MyPage';

const CombinePage = () => {
    return (
        <div className="flex">
          {/* 왼쪽 Nav */}
          <Nav />
          
          {/* 오른쪽 메인 콘텐츠 영역 */}
          <div className='w-[100%]'>
            <Routes>
              <Route path="MyPage/*" element={<MyPage />} />
  
            </Routes>
          </div>
        </div>
      );
    };

export default CombinePage
