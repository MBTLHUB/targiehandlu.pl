import {
    connect,
    WidgetRegForm,
    WidgetPresenter,
    WidgetPresenters,
    WidgetVideoWithEventInfo,
    // WidgetRoleButtons,
    reduxWrapper,
    configure,
    HeadSpeaker,
    WidgetSchedule
  } from 'eventjuicer-site-components';
  
  import Head from 'next/head'


  const settings = require('../../settings').default;


  const PageSpeaker = ({id}) => (<>

      <HeadSpeaker setting="speakers" id={id} path="/speakers">{(data)=><Head>{data}</Head> }</HeadSpeaker>
      <WidgetPresenter id={id} path="/speakers" />
      <WidgetRegForm setting="visitor.register" />
      <WidgetVideoWithEventInfo setting="heroExpo" />
      {/* <WidgetSchedule 
        wrapperProps={{
          label: "virtual.schedule.title", 
          secondaryLabel: "virtual.schedule.description"
        }}
      /> */}
      <WidgetPresenters setting="speakers" link={(item) => `/speakers/${item.id}` } />
      <WidgetRegForm setting="visitor.register" />

  </>
)

export async function getStaticPaths() {
    
    return {
      paths: [],
      fallback: "blocking"
    }
}

  
export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

    const {params: {id}} = props;

    const resource = `presenters/${id}`;

    return await configure(props, {
      settings : settings,
      preload : [resource, "presenters"]
    })
  
  })
  
  
  export default connect()(PageSpeaker);
  