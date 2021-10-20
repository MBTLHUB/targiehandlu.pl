import React from 'react'

import {
    connect,
    reduxWrapper,
    configure,
    WidgetSalesMap,
    WidgetIconGrid,
    WidgetVideoWithEventInfo,
    //WidgetAllExhibitorsAvatarlist,
    WidgetFeaturedCompanies,
    // WidgetAllExhibitorsColumnList,
    WidgetExhibitorsAvatarlist,
    WidgetFaq,
    WidgetPresenters,
    WidgetRegForm,
    WidgetSchedule
  } from 'eventjuicer-site-components';
  
  import settings from '../settings'
  
  const PageIndex = () => (
  
   <>

    <WidgetSchedule />

    <WidgetSalesMap />

    <WidgetRegForm setting="visitor.register" />

    <WidgetVideoWithEventInfo setting="heroExpo" />

    {/* <WidgetFeaturedCompanies /> */}

    {/* <WidgetPresenters setting="speakers" link={(item) => `/speakers/${item.id}` } limit={12} /> */}

    {/* <WidgetIconGrid setting="exhibitors.benefits" />
  
  
  */}

    <WidgetExhibitorsAvatarlist />

    <WidgetRegForm setting="visitor.register" />
  
  
  </>
  
  )
  
  export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {
  
    return await configure(props, {
      settings : settings,
      preload : ['exhibitors', 'allexhibitors']
    })
  
  })
  
  export default connect()(PageIndex);
