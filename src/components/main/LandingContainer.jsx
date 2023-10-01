import React from 'react';
import { FeatBox, FeatDescBox, MainDescBox } from './landing.style';
import { motion } from 'framer-motion';
import LazyShow from './LazyShow';
import { HiOutlineChevronDoubleDown } from 'react-icons/hi';
import thinkingheendy from '../../assets/main/thinkingheendy.png';
import goodHeendy from '../../assets/main/goodheendy.png';
import illust1 from '../../assets/main/catfeed-illust.png';
import illust2 from '../../assets/main/dogfeed-illust.png';
import illust3 from '../../assets/main/dogfeed2-illust.png';
import illust4 from '../../assets/main/can-illust.png';
import gradientBg from '../../assets/main/gradient-bg.png';
import addpetScreenshot from '../../assets/main/addpet-screen.png';
import heendycarScreenshot from '../../assets/main/heendycar-screen.png';
import mainSuggestionScreenshot from '../../assets/main/main_sub.mp4';
function LandingContainer() {
  return (
    <div>
      <MainDescBox>
        <div className="total-box">
          <div className="content-box">
            <div className="heendy-box-container">
              <div className="heendy-box">
                <motion.div
                  className="think-heendy-box"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{ delay: 2.7, duration: 0.8 }}
                >
                  <div className="chat-bubble-box">
                    <LazyShow duration={0.8} delay={0.6}>
                      <p className="chat chat-right chat-1">
                        연어 알러지가 있는 우리 강아지를 위한 간식?
                      </p>
                    </LazyShow>
                    <LazyShow duration={0.8} delay={0.9}>
                      <p className="chat chat-left chat-2">
                        소극적인 우리 강아지에게 맞는 장난감?
                      </p>
                    </LazyShow>
                    <LazyShow duration={0.8} delay={1.2}>
                      <p className="chat chat-right chat-3">
                        나이가 많아 치아가 약한 우리 고양이를 위한 사료?
                      </p>
                    </LazyShow>
                  </div>
                  <LazyShow duration={0.7} delay={0.1}>
                    <div className="img-box">
                      <img className="thiking-heendy" src={thinkingheendy} />
                    </div>
                  </LazyShow>
                </motion.div>
                <motion.div
                  className="good-heendy-box"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3.2, duration: 0.8 }}
                >
                  <LazyShow duration={0.7} delay={0.2}>
                    <div className="illust-box">
                      <motion.div
                        className="illust-img illust-1"
                        transition={{
                          y: {
                            duration: 2.5,
                            repeat: Infinity,
                            ease: 'easeOut',
                          },
                        }}
                        animate={{
                          y: ['8px', '0px', '8px'],
                        }}
                      >
                        <img src={illust1} />
                      </motion.div>
                      <motion.div
                        className="illust-img illust-2"
                        transition={{
                          y: {
                            duration: 2.7,
                            repeat: Infinity,
                            ease: 'easeOut',
                          },
                        }}
                        animate={{
                          y: ['8px', '0px', '8px'],
                        }}
                      >
                        <img src={illust2} />
                      </motion.div>
                      <motion.div
                        className="illust-img illust-3"
                        transition={{
                          y: {
                            duration: 2.3,
                            repeat: Infinity,
                            ease: 'easeOut',
                          },
                        }}
                        animate={{
                          y: ['8px', '0px', '8px'],
                        }}
                      >
                        <img src={illust3} />
                      </motion.div>
                      <motion.div
                        className="illust-img illust-4"
                        transition={{
                          y: {
                            duration: 2.8,
                            repeat: Infinity,
                            ease: 'easeOut',
                          },
                        }}
                        animate={{
                          y: ['8px', '0px', '8px'],
                        }}
                      >
                        <img src={illust4} />
                      </motion.div>
                    </div>
                  </LazyShow>
                  <div className="img-box">
                    <img className="good-heendy" src={goodHeendy} />
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="main-title-box">
              <LazyShow duration={0.9} delay={2.7}>
                <p className="title-1">세상에 하나뿐인 나의 반려동물을 위한</p>
              </LazyShow>
              <LazyShow duration={0.9} delay={3}>
                <p className="title-2">
                  <span className="title-point-color-1">1대1 맞춤 추천</span>{' '}
                  서비스, <span className="title-point-color-2">더펫</span>
                </p>
              </LazyShow>
            </div>
          </div>
          <motion.div
            className="bg-box"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 3.5, duration: 0.8 }}
          >
            <img src={gradientBg} />
          </motion.div>
        </div>
        <LazyShow duration={0.6} delay={3.3}>
          <motion.div
            className="more-icon-box"
            transition={{
              y: {
                duration: 1.2,
                repeat: Infinity,
                ease: 'easeOut',
              },
            }}
            animate={{
              y: ['8px', '0px', '8px'],
            }}
          >
            <p>여러 기능들을 확인해보세요!</p>
            <HiOutlineChevronDoubleDown className="more-icon" />
          </motion.div>
        </LazyShow>
      </MainDescBox>
      <FeatDescBox>
        <LazyShow duration={0.8} delay={0.6}>
          <FeatBox>
            <div className="w-img">
              <img src={addpetScreenshot} className="img-shadow" />
            </div>
            <div className="w-text">
              <p>
                우리 반려동물의{' '}
                <span className="text-bold">알러지 정보/연령대/견종</span>을
                등록하면,
              </p>
              <p>
                <span className="text-bold">꼭 맞는 상품들을 추천</span>
                해드려요!
              </p>
            </div>
          </FeatBox>
        </LazyShow>
        <LazyShow duration={0.8} delay={0.8}>
          <FeatBox>
            <div className="w-text">
              <p>
                <span className="text-bold">
                  입맛도 까다롭고, 알러지도 있는
                </span>{' '}
                우리 반려동물,
              </p>
              <p>
                조금 더 <span className="text-bold">심층적인 추천</span>을 받고
                싶다면?
              </p>
            </div>
            <div className="w-img">
              <img src={addpetScreenshot} className="img-shadow" />
            </div>
          </FeatBox>
        </LazyShow>
        <LazyShow duration={0.8} delay={0.6}>
          <FeatBox>
            <div className="w-img">
              {/* <img src={suggestionScreenshot} className="img-shadow" /> */}
              <video className="img-shadow" autoPlay loop muted>
                <source src={mainSuggestionScreenshot} type="video/mp4" />
              </video>
            </div>
            <div className="w-text">
              <p>
                <span className="text-bold">
                  매달 컨셉에 맞는 귀여운 장난감들과 생활용품
                </span>
                이 집앞까지!
              </p>
              <p>
                현대백화점 자체 편집숍 '위펫'에서 엄선한 상품들을 큐레이션하여
                보내드려요
              </p>
            </div>
          </FeatBox>
        </LazyShow>
        <LazyShow duration={0.8} delay={0.8}>
          <FeatBox>
            <div className="w-text">
              <p>
                현대백화점, 현대아울렛의
                <span className="text-bold"> 흰디카</span>
              </p>
              <p>이젠 온라인으로 편하게 예약하고 이용 가능합니다!</p>
            </div>
            <div className="w-img">
              <img src={heendycarScreenshot} />
            </div>
          </FeatBox>
        </LazyShow>
      </FeatDescBox>
    </div>
  );
}

export default LandingContainer;
