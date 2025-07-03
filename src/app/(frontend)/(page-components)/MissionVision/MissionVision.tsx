/* eslint-disable @next/next/no-img-element */
'use client'
import classnames from 'classnames'
import React, { useState } from 'react'
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'

const MissionVision = () => {
  const [activeTab, setActiveTab] = useState('1')

  const toggle = (tab: string) => {
    if (activeTab !== tab) setActiveTab(tab)
  }

  return (
    <div className="mvv">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="mvvTabs">
              <div className="d-flex align-items-start mvvTabs__wrapper">
                <div
                  className="mb-30 nav nav-pills"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <Nav tabs className="justify-content-center nav">
                    <NavItem>
                      <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => {
                          toggle('1')
                        }}
                      >
                        Jak działamy
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => {
                          toggle('2')
                        }}
                      >
                        Gdzie działamy
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({ active: activeTab === '3' })}
                        onClick={() => {
                          toggle('3')
                        }}
                      >
                        Co robimy
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
                <TabContent activeTab={activeTab} className="mb-30">
                  <TabPane tabId="1">
                    <div className="mvvTabs__content">
                      <h2 className="mvvTabs__heading">
                        Pytamy na miejscu jaka pomoc jest potrzebna
                      </h2>
                      <p className="mb-25 mvvTabs__text">
                        Naszym celem jest wspieranie ich w powrocie do życia, jakie wiedli przed
                        wojną lub zamachami. Chcemy dać im szansę na usamodzielnienie się i
                        uniezależnienie od zewnętrznej pomocy, dlatego odbudowujemy i remontujemy
                        zniszczone domy, otwieramy sklepy, warsztaty i zakłady pracy, wspieramy
                        gospodarstwa rolne oraz zapewniamy edukację dzieciom i dorosłym. Wszystkie
                        te działania są bezpośrednią odpowiedzią na prośby, które otrzymujemy. Nie
                        mamy jednej dziedziny, w której się specjalizujemy, a wsparcie dostosowujemy
                        do aktualnej sytuacji osób poszkodowanych.
                      </p>
                    </div>
                  </TabPane>
                  <TabPane tabId="2">
                    <div className="mvvTabs__content">
                      <h2 className="mvvTabs__heading">Sprawdź, w jakich regionach pomagamy</h2>
                      <div className="row">
                        <img
                          src="https://orlastraz.org/wp-content/uploads/2025/03/mapa_OS2-scaled.jpg"
                          width={400}
                          alt="Mapa działalności Orlej Straży"
                          className="col-6"
                        />
                        <p className="col-6 mvvTabs__text">
                          Do tej pory pomagaliśmy ofiarom konfliktów zbrojnych i aktów terroru w
                          kilku krajach oraz regionach autonomicznych na trzech kontynentach. W
                          niektórych przypadkach były to jedynie pojedyncze projekty humanitarne, w
                          innych długoletnia działalność. Od 2016 roku udzieliliśmy różnych form
                          wsparcia potrzebującym w:
                        </p>
                      </div>
                    </div>
                  </TabPane>
                  <TabPane tabId="3">
                    <div className="mvvTabs__content">
                      <h2 className="mvvTabs__heading">
                        Zawsze staramy się dostosowywać pomoc do potrzeb
                      </h2>
                      <p className="mb-25 mvvTabs__text">
                        Zapewnienie ludziom wsparcia w powrocie do normalności oraz danie im szansy,
                        aby mogli się usamodzielnić to nasze priorytety. Są jednak sytuacje, kiedy
                        potrzebna jest też pomoc doraźna. Dopiero zaspokojenie podstawowych potrzeb
                        pozwala myśleć o bardziej rozwiniętych działaniach. W Iraku wspieraliśmy
                        rodziny, które po ludobójstwie musiały zamieszkać w obozach dla
                        przesiedleńców, m.in. kupując im sprzęt gospodarstwa domowego, jak lodówki
                        czy pralki. Czasem trzeba było dostarczyć im łózka lub materace, aby dzieci
                        nie spały na gołej ziemi. Ludzie trafiali do obozów, nie mając absolutnie
                        nic.
                      </p>
                    </div>
                  </TabPane>
                </TabContent>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MissionVision
