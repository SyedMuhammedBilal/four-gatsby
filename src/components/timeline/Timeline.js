import React from "react"
import "./timeline.css"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import './style.min.css';

const Timeline = () => {

    return (
        <>
            <div id="timeline"
                style={{
                    margin: `0 Auto`,
                    maxWidth: `100%`,
                    color: `#FFF`,
                    overflowX: 'hidden'
                }}
            >
                <div id="2019"></div>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="cont"

                        icon={
                            <h1 className="h1" style={{fontSize: '20px', fontWeight: 400, fontFamily: 'sans-serif'}}>2019</h1>}

                    />
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#FFF', color: '#000', opacity: 0.75 }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(185 184 184)' }}
                        iconStyle={{ background: '#DD226E', color: '#DD226E' }}
                        position="left"
                    >
                        <h3
                            style={{
                                color: `#DD226E`,
                                fontWeight: 600,
                                fontFamily: 'sans-serif'
                            }}
                        >November
          </h3>
                        <p>
                            <strong style={{fontWeight: 500, fontFamily: 'sans-serif'}}>25th</strong>, over a round of beers and spicy wings, a mutual idea was formed in building a dating app around mental health, total wellbeing and community barriers.
          </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#FFF', color: '#000', opacity: 0.75 }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(185 184 184)' }}
                        iconStyle={{ background: '#DD226E', color: '#fff' }}
                        position="left"
                    >
                        <p>
                            <strong style={{fontWeight: 500, fontFamily: 'sans-serif'}}>26th</strong>, name formed, product flow was created with primary purpose, 100% of apps profits will fight global depression and invest in growth.
          </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#FFF', color: '#000', opacity: 0.75 }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(185 184 184)' }}
                        iconStyle={{ background: '#DD226E', color: '#fff' }}
                        position="left"
                    >
                        <p>
                            <strong style={{fontWeight: 500, fontFamily: 'sans-serif'}}>29th</strong>, pitch deck was put together along with a list of potential founding team candidates.
          </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#FFF', color: '#000', opacity: 0.75 }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(185 184 184)' }}
                        iconStyle={{ background: '#DD226E', color: '#fff' }}
                        position="right"
                    >
                        <h3
                            style={{
                                color: `#DD226E`,
                                fontWeight: 600,
                                fontFamily: 'sans-serif'
                            }}
                        >December
          </h3>
                        <p>
                            Founding members back the idea, private social group created.
          </p>
                    </VerticalTimelineElement>
                    <div id="2020"></div>
                    <VerticalTimelineElement

                        //  iconStyle={{ background: '#DD226E', width: '78px', height: '40px', borderRadius: '0%', marginLeft: '-5%', textAlign: 'center' }}
                        icon={
                            <h1 className="h1" style={{fontSize: '20px', fontWeight: 400, fontFamily: 'sans-serif'}}>2020</h1>}
                    />
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#FFF', color: '#000', opacity: 0.75 }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(185 184 184)' }}
                        iconStyle={{ background: '#DD226E', color: '#fff' }}
                        position="left"
                    >
                        <h3
                            style={{
                                color: `#DD226E`,
                                fontWeight: 600,
                                fontFamily: 'sans-serif'
                            }}
                        >January
                        </h3>
                        <p>
                            <strong style={{fontWeight: 500, fontFamily: 'sans-serif'}}>9th</strong>, team tools, boards, structure and resources were created.
          </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#FFF', color: '#000', opacity: 0.75 }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(185 184 184)' }}
                        iconStyle={{ background: '#DD226E', color: '#fff' }}
                        position="left"
                    >
                        <p>
                            <strong style={{fontWeight: 500, fontFamily: 'sans-serif'}}>21th</strong>, founding members come together for the first time over drinks, billiards and pong to kick off the primary general meeting of the year. There were synergies, energies and decisions, decisions, decisions.
          </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#FFF', color: '#000', opacity: 0.75 }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(185 184 184)' }}
                        iconStyle={{ background: '#DD226E', color: '#fff' }}
                        position="right"
                    >
                        <h3
                            style={{
                                color: `#DD226E`,
                                fontWeight: 600,
                                fontFamily: 'sans-serif'
                            }}
                        >February
          </h3>
                        <p>
                            <strong style={{fontWeight: 500, fontFamily: 'sans-serif'}}>18th</strong>, founding members begin reviewing candidates for CTO
          </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#FFF', color: '#000', opacity: 0.75 }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(185 184 184)' }}
                        iconStyle={{ background: '#DD226E', color: '#fff' }}
                        position="right"
                    >
                        <p>
                            <strong style={{fontWeight: 500, fontFamily: 'sans-serif'}}>29th</strong>, revised deck prepared.
          </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#FFF', color: '#000', opacity: 0.75 }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(185 184 184)' }}
                        iconStyle={{ background: '#DD226E', color: '#fff' }}
                        position="left"
                    >
                        <h3
                            style={{
                                color: `#DD226E`,
                                fontWeight: 600,
                                fontFamily: 'sans-serif'
                            }}
                        >March
          </h3>
                        <p>
                            <strong style={{fontWeight: 500, fontFamily: 'sans-serif'}}>Coronavirus makes its way to Toronto, life as we know it puts on hold. State of Emergency is enforced. Canadians rush for TP. Food delivery platforms overworked</strong>
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#FFF', color: '#000', opacity: 0.75 }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(185 184 184)' }}
                        iconStyle={{ background: '#DD226E', color: '#fff' }}
                        position="right"
                    >
                        <h3
                            style={{
                                color: `#DD226E`,
                                fontWeight: 600,
                                fontFamily: 'sans-serif'
                            }}
                        >April
          </h3>
                        <p>
                            A month in lockdown, Coronavirus brought out the best of us and the worst of us. Life as we knew it was still on standby. Depression begins to show between founding members.
          </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#FFF', color: '#000', opacity: 0.75 }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(185 184 184)' }}
                        iconStyle={{ background: '#DD226E', color: '#fff' }}
                        position="left"
                    >
                        <h3
                            style={{
                                color: `#DD226E`,
                                fontWeight: 600,
                                fontFamily: 'sans-serif'
                            }}
                        >May
          </h3>
                        <p>
                            <strong style={{fontWeight: 500, fontFamily: 'sans-serif'}}>19th</strong>, more than half of founding members drop from the app and focus on themselves during the pandemic. General meeting postponed.
          </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#FFF', color: '#000', opacity: 0.75 }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(185 184 184)' }}
                        iconStyle={{ background: '#DD226E', color: '#fff' }}
                        position="right"
                    >
                        <h3
                            style={{
                                color: `#DD226E`,
                                fontWeight: 600,
                                fontFamily: 'sans-serif'
                            }}
                        >June
          </h3>
                        <p>
                            Original app concept redefined from 2019 as one of series products to be built under the headline of fourpercent. The mission to combat global depression and invest in social growth has been relocated to the brands’s journey with the mission to to drive global change through local actions.
          </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#FFF', color: '#000', opacity: 0.75 }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(80,79,79)' }}
                        iconStyle={{ background: '#DD226E', color: '#fff' }}
                        position="right"
                    >
                        <p>
                            Company's brand strategy and tone began to form.
          </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#FFF', color: '#000', opacity: 0.75 }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(185 184 184)' }}
                        iconStyle={{ background: '#DD226E', color: '#fff' }}
                        position="right"
                    >
                        <p>
                            Stage 3, lockdown lifted. Trade Name finalized and logo style picked.
          </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#FFF', color: '#000' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(185 184 184)' }}
                        iconStyle={{ background: '#DD226E', color: '#fff' }}
                        position="right"
                    >
                        <p>
                            Product timeline comes to shape.
          </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#FFF', color: '#000', opacity: 0.75 }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(185 184 184)' }}
                        iconStyle={{ background: '#DD226E', color: '#fff' }}
                        position="left"
                    >
                        <h3
                            style={{
                                color: `#DD226E`,
                                fontWeight: 600,
                                fontFamily: 'sans-serif'
                            }}
                        >July
          </h3>
                        <p>
                            <strong style={{fontWeight: 500, fontFamily: 'sans-serif'}}>Current global events and social issues become the inspiration behind the first product. New product flow created under fourpercent figurehead. Design system begin to form. Product brand strategy takes shape. Fourpercent brand messaging gets a voice.</strong>
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#FFF', color: '#000', opacity: 0.75 }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(185 184 184)' }}
                        iconStyle={{ background: '#DD226E', color: '#fff' }}
                        position="right"
                    >
                        <h3
                            style={{
                                color: `#DD226E`,
                                fontWeight: 600,
                                fontFamily: 'sans-serif'
                            }}
                        >August
          </h3>
                        <p>
                            Fourpercent socials finalized and registered. IA revisited and refined.
          </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#FFF', color: '#000', opacity: 0.75 }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(185 184 184)' }}
                        iconStyle={{ background: '#DD226E', color: '#fff' }}
                        position="right"
                    >
                        <p>
                            Fourpercent brand polished some more. <br />Brand copy ready.
          </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#FFF', color: '#000', opacity: 0.75 }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(185 184 184)' }}
                        iconStyle={{ background: '#DD226E', color: '#fff' }}
                        position="left"
                    >
                        <h3
                            style={{
                                color: `#DD226E`,
                                fontWeight: 600,
                                fontFamily: 'sans-serif'
                            }}
                        >September
          </h3>
                        <p>
                            <strong style={{fontWeight: 500, fontFamily: 'sans-serif'}}>New social justice product named Riverr. First rounds of designs begin to take shape on fourpercent socials and riverr identity. Fourpercent swag bought and location site picked for 2021 calendar year social strategy.</strong>
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#FFF', color: '#000', opacity: 0.75 }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(185 184 184)' }}
                        iconStyle={{ background: '#DD226E', color: '#fff' }}
                        position="right"
                    >
                        <h3
                            style={{
                                color: `#DD226E`,
                                fontWeight: 600,
                                fontFamily: 'sans-serif'
                            }}
                        >October
          </h3>
                        <p>
                            Product - Riverr socials finalized and registered. Fourpercent professional socials goes public. Riverr begins development roadmap.
          </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#FFF', color: '#000', opacity: 0.75 }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(185 184 184)' }}
                        iconStyle={{ background: '#DD226E', color: '#fff' }}
                        position="right"
                    >
                        <p>
                            Cofounders celebrate the weekend with a roadtrip. Found inspiration in Riverr’s messaging. Riverr copy takes face.
          </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#FFF', color: '#000', opacity: 0.75 }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(185 184 184)' }}
                        iconStyle={{ background: '#DD226E', color: '#fff' }}
                        position="left"
                    >
                        <h3
                            style={{
                                color: `#DD226E`,
                                fontWeight: 600,
                                fontFamily: 'sans-serif'
                            }}
                        >November
          </h3>
                        <p>
                            <strong style={{fontWeight: 500, fontFamily: 'sans-serif'}}>Fourpercent website soft released. Feedback loop taken into account. Fourpercent refines roadmap and culture.</strong>
                        </p>
                    </VerticalTimelineElement>




                </VerticalTimeline>

            </div>

        </>
    )
}


export default Timeline
