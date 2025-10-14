import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '@/pages/home/Home'
import { Layout } from '@/layout/Layout'
import { BASE_ROOT, DM } from '@/store/directory/directory'
// import MoriCorpTest01 from '@/pages/mori-corp-test-01/MoriCorpTest01'
// import MoriCorpTest02 from '@/pages/mori-corp-test-02/MoriCorpTest02'
// import MoriCorpTest03 from '@/pages/mori-corp-test-03/MoriCorpTest03'
import MoriCorpTest04 from '@/pages/mori-corp-test-04/MoriCorpTest04'
import MoriCorpTest05 from '@/pages/mori-corp-test-05/MoriCorpTest05'
import MoriCorp from '@/pages/figma-components/mori-corp/MoriCorp'
import FujigotembaDistillery from '@/pages/figma-components/fujigotemba-distillery/FujigotembaDistillery'
import FigmaComponentsTest from '@/pages/figma-components/figma-template-01/FigmaTemplate01'

export const AppRoutes = () => {
  return <>
    <BrowserRouter basename={BASE_ROOT}>
      <Routes>
        <Route element={<Layout />}>
          <Route path={DM.TOP} element={<Home />} />
          {/* <Route path={DM.MORI_CORP_TEST_01} element={<MoriCorpTest01 />} /> */}
          {/* <Route path={DM.MORI_CORP_TEST_02} element={<MoriCorpTest02 />} /> */}
          {/* <Route path={DM.MORI_CORP_TEST_03} element={<MoriCorpTest03 />} /> */}
          <Route path={DM.MORI_CORP_TEST_04} element={<MoriCorpTest04 />} />
          <Route path={DM.MORI_CORP_TEST_05} element={<MoriCorpTest05 />} />
          <Route path={DM.MORI_CORP_COMP} element={<MoriCorp />} />
          <Route path={DM.FUJIGOTEMBA_DISTILLERY_COMP} element={<FujigotembaDistillery />} />
          <Route path={DM.FIGMA_TEMPLATE_01} element={<FigmaComponentsTest />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
}
