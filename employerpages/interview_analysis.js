import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Component } from "@angular/core";

@Component({
  selector: "my-component, MyComponent",
  template: `
    <div class="interview-analysis">
      <div class="div">
        <div class="logo">
          <img
            loading="lazy"
            srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/01e074a2cc1762117cd09b8ea9889d06f68896d5eb0400d77224aa3b132fa5d0?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/01e074a2cc1762117cd09b8ea9889d06f68896d5eb0400d77224aa3b132fa5d0?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/01e074a2cc1762117cd09b8ea9889d06f68896d5eb0400d77224aa3b132fa5d0?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/01e074a2cc1762117cd09b8ea9889d06f68896d5eb0400d77224aa3b132fa5d0?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/01e074a2cc1762117cd09b8ea9889d06f68896d5eb0400d77224aa3b132fa5d0?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/01e074a2cc1762117cd09b8ea9889d06f68896d5eb0400d77224aa3b132fa5d0?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/01e074a2cc1762117cd09b8ea9889d06f68896d5eb0400d77224aa3b132fa5d0?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/01e074a2cc1762117cd09b8ea9889d06f68896d5eb0400d77224aa3b132fa5d0?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3"
            class="img"
          />
        </div>
        <div class="div-2">
          <div class="right">
            <div class="menu">
              <div class="icon-flag-menu">
                <div class="notification-badge">3</div>
              </div>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/96e2662365f9ceb8e59201ea3f8fab52a12fdc81b8e6a1bd9c32a35b1f5a587f?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3"
              class="img-2"
            />
            <div class="user">
              <div class="avatar">
                <img
                  loading="lazy"
                  srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/8ed968c02c040437097f029bb0effe0c4acb10226b296467c74865e761643acf?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8ed968c02c040437097f029bb0effe0c4acb10226b296467c74865e761643acf?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8ed968c02c040437097f029bb0effe0c4acb10226b296467c74865e761643acf?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8ed968c02c040437097f029bb0effe0c4acb10226b296467c74865e761643acf?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8ed968c02c040437097f029bb0effe0c4acb10226b296467c74865e761643acf?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8ed968c02c040437097f029bb0effe0c4acb10226b296467c74865e761643acf?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8ed968c02c040437097f029bb0effe0c4acb10226b296467c74865e761643acf?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8ed968c02c040437097f029bb0effe0c4acb10226b296467c74865e761643acf?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3"
                  class="img-3"
                />
              </div>
              <div class="name">
                <div class="ahmed-salam">Ahmed Salam</div>
                <div class="data-architect">Data Architect</div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/952ecd0414f50e63374dec3a9258e5f9ce5e8abf6713ebc4e1b2ffbf733f8deb?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3"
                class="img-4"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="div-3">
        <div class="div-4">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/470d75cd6735604346933c81a4c2f0434c8a3924301fe9a988b375400faeb950?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3"
            class="img-5"
          />
          <div class="back-to-applicants">Back to Applicants</div>
        </div>
        <div class="div-5">
          <div class="div-6">
            <div class="div-7">
              <div class="interview-analysis-for">Interview analysis for</div>
              <div class="user-2">
                <div class="avatar-2">
                  <img
                    loading="lazy"
                    srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/072fd5cb0ba80d5a21150b8effbada24091269b67f07ae8b37c81124e5702849?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/072fd5cb0ba80d5a21150b8effbada24091269b67f07ae8b37c81124e5702849?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/072fd5cb0ba80d5a21150b8effbada24091269b67f07ae8b37c81124e5702849?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/072fd5cb0ba80d5a21150b8effbada24091269b67f07ae8b37c81124e5702849?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/072fd5cb0ba80d5a21150b8effbada24091269b67f07ae8b37c81124e5702849?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/072fd5cb0ba80d5a21150b8effbada24091269b67f07ae8b37c81124e5702849?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/072fd5cb0ba80d5a21150b8effbada24091269b67f07ae8b37c81124e5702849?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/072fd5cb0ba80d5a21150b8effbada24091269b67f07ae8b37c81124e5702849?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3"
                    class="img-6"
                  />
                </div>
                <div class="name-2">
                  <div class="mohamed-khalifa">Mohamed Khalifa</div>
                  <div class="product-designer">Product Designer</div>
                </div>
              </div>
            </div>
          </div>
          <div class="div-8">
            <div class="div-9">
              <div class="confidence-personal-skills">
                Confidence & personal skills:
              </div>
              <div
                class="twitter-is-seeking-an-experienced-and-innovative-senior-ux-designer-to-join-our-dynamic-design-team-as-a-senior-ux-designer-at-twitter-you-will-play-a-pivotal-role-in-shaping-intuitive-seamless-and-delightful-experiences-for-millions-of-users-worldwide-you-will-collaborate-closely-with-product-managers-engineers-and-other-key-stakeholders-to-understand-user-needs-define-design-solutions-and-drive-product-innovation-in-this-role-you-will-take-ownership-of-the-entire-ux-process-from-user-research-and-ideation-to-wireframing-prototyping-and-delivering-high-fidelity-designs-you-will-use-your-expertise-to-guide-the-design-strategy-conduct-usability-testing-and-iterate-based-on-insights-and-data-driven-decisions-if-youre-passionate-about-user-centered-design-have-a-knack-for-solving-complex-problems-and-excel-in-a-fast-paced-collaborative-environment-we-want-to-hear-from-you"
              >
                Twitter is seeking an experienced and innovative Senior UX
                Designer to join our dynamic design team. As a Senior UX
                Designer at Twitter, you will play a pivotal role in shaping
                intuitive, seamless, and delightful experiences for millions of
                users worldwide. You will collaborate closely with product
                managers, engineers, and other key stakeholders to understand
                user needs, define design solutions, and drive product
                innovation.
                <br />
                In this role, you will take ownership of the entire UX process,
                from user research and ideation to wireframing, prototyping, and
                delivering high-fidelity designs. You will use your expertise to
                guide the design strategy, conduct usability testing, and
                iterate based on insights and data-driven decisions. If you're
                passionate about user-centered design, have a knack for solving
                complex problems, and excel in a fast-paced, collaborative
                environment, we want to hear from you!
              </div>
            </div>
          </div>
          <div class="div-10">
            <div class="div-11">
              <div class="he-performs-well-at-the-following">
                He performs well at the following:
              </div>
              <div
                class="twitter-is-seeking-an-experienced-and-innovative-senior-ux-designer-to-join-our-dynamic-design-team-as-a-senior-ux-designer-at-twitter-you-will-play-a-pivotal-role-in-shaping-intuitive-seamless-and-delightful-experiences-for-millions-of-users-worldwide-you-will-collaborate-closely-with-product-managers-engineers-and-other-key-stakeholders-to-understand-user-needs-define-design-solutions-and-drive-product-innovation-in-this-role-you-will-take-ownership-of-the-entire-ux-process-from-user-research-and-ideation-to-wireframing-prototyping-and-delivering-high-fidelity-designs-you-will-use-your-expertise-to-guide-the-design-strategy-conduct-usability-testing-and-iterate-based-on-insights-and-data-driven-decisions-if-youre-passionate-about-user-centered-design-have-a-knack-for-solving-complex-problems-and-excel-in-a-fast-paced-collaborative-environment-we-want-to-hear-from-you"
              >
                Twitter is seeking an experienced and innovative Senior UX
                Designer to join our dynamic design team. As a Senior UX
                Designer at Twitter, you will play a pivotal role in shaping
                intuitive, seamless, and delightful experiences for millions of
                users worldwide. You will collaborate closely with product
                managers, engineers, and other key stakeholders to understand
                user needs, define design solutions, and drive product
                innovation.
                <br />
                In this role, you will take ownership of the entire UX process,
                from user research and ideation to wireframing, prototyping, and
                delivering high-fidelity designs. You will use your expertise to
                guide the design strategy, conduct usability testing, and
                iterate based on insights and data-driven decisions. If you're
                passionate about user-centered design, have a knack for solving
                complex problems, and excel in a fast-paced, collaborative
                environment, we want to hear from you!
              </div>
            </div>
          </div>
          <div class="div-12">
            <div class="div-13">
              <div class="what-do-he-need-to-improve">
                What do he need to improve:
              </div>
              <div
                class="twitter-is-seeking-an-experienced-and-innovative-senior-ux-designer-to-join-our-dynamic-design-team-as-a-senior-ux-designer-at-twitter-you-will-play-a-pivotal-role-in-shaping-intuitive-seamless-and-delightful-experiences-for-millions-of-users-worldwide-you-will-collaborate-closely-with-product-managers-engineers-and-other-key-stakeholders-to-understand-user-needs-define-design-solutions-and-drive-product-innovation-in-this-role-you-will-take-ownership-of-the-entire-ux-process-from-user-research-and-ideation-to-wireframing-prototyping-and-delivering-high-fidelity-designs-you-will-use-your-expertise-to-guide-the-design-strategy-conduct-usability-testing-and-iterate-based-on-insights-and-data-driven-decisions-if-youre-passionate-about-user-centered-design-have-a-knack-for-solving-complex-problems-and-excel-in-a-fast-paced-collaborative-environment-we-want-to-hear-from-you"
              >
                Twitter is seeking an experienced and innovative Senior UX
                Designer to join our dynamic design team. As a Senior UX
                Designer at Twitter, you will play a pivotal role in shaping
                intuitive, seamless, and delightful experiences for millions of
                users worldwide. You will collaborate closely with product
                managers, engineers, and other key stakeholders to understand
                user needs, define design solutions, and drive product
                innovation.
                <br />
                In this role, you will take ownership of the entire UX process,
                from user research and ideation to wireframing, prototyping, and
                delivering high-fidelity designs. You will use your expertise to
                guide the design strategy, conduct usability testing, and
                iterate based on insights and data-driven decisions. If you're
                passionate about user-centered design, have a knack for solving
                complex problems, and excel in a fast-paced, collaborative
                environment, we want to hear from you!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: contents;
      }
      .interview-analysis {
        background-color: rgba(250, 250, 250, 1);
        display: flex;
        padding-bottom: 33px;
        flex-direction: column;
        overflow: hidden;
      }
      .div {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
      }
      @media (max-width: 991px) {
        .div {
          max-width: 100%;
        }
      }
      .logo {
        background-color: rgba(255, 255, 255, 1);
        border-color: rgba(228, 228, 231, 1);
        border-bottom-width: 1px;
        align-self: stretch;
        display: flex;
        min-width: 240px;
        flex-direction: column;
        justify-content: center;
        width: 264px;
        margin: auto 0;
        padding: 12px 74px 12px 64px;
      }
      @media (max-width: 991px) {
        .logo {
          padding: 0 20px;
        }
      }
      .img {
        aspect-ratio: 3.15;
        object-fit: contain;
        object-position: center;
        width: 126px;
      }
      .div-2 {
        background-color: rgba(255, 255, 255, 1);
        border-color: rgba(236, 236, 236, 1);
        border-bottom-width: 1px;
        align-self: stretch;
        display: flex;
        min-width: 240px;
        height: 64px;
        align-items: center;
        gap: 10px;
        justify-content: end;
        width: 1176px;
        margin: auto 0;
        padding: 0 40px;
      }
      @media (max-width: 991px) {
        .div-2 {
          max-width: 100%;
          padding: 0 20px;
        }
      }
      .right {
        align-self: stretch;
        display: flex;
        min-width: 240px;
        align-items: center;
        gap: 16px;
        justify-content: start;
        margin: auto 0;
      }
      .menu {
        align-self: stretch;
        display: flex;
        align-items: center;
        gap: 16px;
        color: rgba(255, 255, 255, 1);
        white-space: nowrap;
        text-align: center;
        letter-spacing: 0.04px;
        justify-content: start;
        margin: auto 0;
        font: 600 9px/1 Inter, sans-serif;
      }
      @media (max-width: 991px) {
        .menu {
          white-space: initial;
        }
      }
      .icon-flag-menu {
        border-radius: 8px;
        align-self: stretch;
        display: flex;
        align-items: center;
        gap: 8px;
        justify-content: start;
        margin: auto 0;
        padding: 4px 0 4px 4px;
      }
      @media (max-width: 991px) {
        .icon-flag-menu {
          white-space: initial;
        }
      }
      .notification-badge {
        border-radius: 100px;
        background-color: rgba(240, 68, 56, 1);
        align-self: stretch;
        min-height: 16px;
        width: 16px;
        height: 16px;
        margin: auto 0;
        padding: 0 5px;
        border: 2px solid rgba(255, 255, 255, 1);
      }
      @media (max-width: 991px) {
        .notification-badge {
          white-space: initial;
        }
      }
      .img-2 {
        aspect-ratio: 0.03;
        object-fit: contain;
        object-position: center;
        width: 1px;
        align-self: stretch;
        margin: auto 0;
      }
      .user {
        align-self: stretch;
        display: flex;
        align-items: center;
        gap: 12px;
        justify-content: start;
        height: 100%;
        padding: 12px 0;
      }
      .avatar {
        align-self: stretch;
        display: flex;
        flex-direction: column;
        align-items: end;
        justify-content: start;
        width: 40px;
        margin: auto 0;
      }
      .img-3 {
        aspect-ratio: 1;
        object-fit: contain;
        object-position: center;
        width: 40px;
        border-radius: 50%;
      }
      .name {
        align-self: stretch;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 115px;
        margin: auto 0;
        font: 14px/1 Poppins, sans-serif;
      }
      .ahmed-salam {
        color: rgba(9, 9, 11, 1);
        font-weight: 500;
      }
      .data-architect {
        color: rgba(113, 113, 121, 1);
        font-weight: 400;
      }
      .img-4 {
        aspect-ratio: 1;
        object-fit: contain;
        object-position: center;
        width: 20px;
        align-self: stretch;
        margin: auto 0;
      }
      .div-3 {
        align-self: center;
        display: flex;
        margin-top: 38px;
        width: 100%;
        max-width: 1018px;
        flex-direction: column;
        justify-content: start;
      }
      @media (max-width: 991px) {
        .div-3 {
          max-width: 100%;
        }
      }
      .div-4 {
        align-self: start;
        display: flex;
        align-items: center;
        gap: 8px;
        color: rgba(82, 82, 90, 1);
        justify-content: start;
        font: 500 14px/1 Poppins, sans-serif;
      }
      .img-5 {
        aspect-ratio: 1;
        object-fit: contain;
        object-position: center;
        width: 16px;
        align-self: stretch;
        margin: auto 0;
      }
      .back-to-applicants {
        align-self: stretch;
        margin: auto 0;
      }
      .div-5 {
        display: flex;
        margin-top: 20px;
        width: 100%;
        flex-direction: column;
        justify-content: start;
      }
      @media (max-width: 991px) {
        .div-5 {
          max-width: 100%;
        }
      }
      .div-6 {
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: start;
      }
      @media (max-width: 991px) {
        .div-6 {
          max-width: 100%;
        }
      }
      .div-7 {
        border-radius: var(--Spacing-4px-spacing-system-spacing-sm, 12px);
        background: var(--Colors-white-white, #fff);
        box-shadow: 0px 0px 0px 1px rgba(18, 18, 18, 0.05),
          0px 1px 1px 0px rgba(18, 18, 18, 0.15),
          0px 3px 6px 0px rgba(18, 18, 18, 0.1);
        background-color: var(--Colors-white-white, #fff);
        display: flex;
        width: 100%;
        padding-left: 24px;
        padding-right: 24px;
        padding-top: 24px;
        padding-bottom: 24px;
        flex-direction: column;
        justify-content: start;
        padding: var(--Spacing-4px-spacing-system-spacing-x-big, 24px);
        gap: var(--Spacing-4px-spacing-system-spacing-x-big, 24px);
      }
      @media (max-width: 991px) {
        .div-7 {
          max-width: 100%;
          padding: 0 20px;
        }
      }
      .interview-analysis-for {
        color: rgba(51, 49, 132, 1);
        font: 600 18px/1 Poppins, sans-serif;
      }
      .user-2 {
        align-self: start;
        display: flex;
        margin-top: 24px;
        min-height: 66px;
        align-items: center;
        gap: 12px;
        justify-content: start;
        padding: 1px 0;
      }
      .avatar-2 {
        align-self: stretch;
        display: flex;
        min-height: 64px;
        flex-direction: column;
        justify-content: start;
        width: 64px;
        margin: auto 0;
      }
      .img-6 {
        aspect-ratio: 1;
        object-fit: contain;
        object-position: center;
        width: 64px;
        border-radius: 50%;
        flex: 1;
      }
      .name-2 {
        align-self: stretch;
        display: flex;
        flex-direction: column;
        font-family: Poppins, sans-serif;
        justify-content: center;
        margin: auto 0;
      }
      .mohamed-khalifa {
        color: rgba(9, 9, 11, 1);
        font-size: 18px;
        font-weight: 500;
        line-height: 1;
      }
      .product-designer {
        color: rgba(113, 113, 121, 1);
        font-size: 14px;
        font-weight: 400;
        line-height: 1;
        margin-top: 8px;
      }
      .div-8 {
        border-radius: var(--Spacing-4px-spacing-system-spacing-sm, 12px);
        background: var(--Colors-white-white, #fff);
        box-shadow: 0px 0px 0px 1px rgba(18, 18, 18, 0.05),
          0px 1px 1px 0px rgba(18, 18, 18, 0.15),
          0px 3px 6px 0px rgba(18, 18, 18, 0.1);
        background-color: var(--Colors-white-white, #fff);
        display: flex;
        margin-top: 24px;
        width: 100%;
        padding-left: 24px;
        padding-right: 24px;
        padding-top: 24px;
        padding-bottom: 24px;
        flex-direction: column;
        font-family: Inter, sans-serif;
        justify-content: center;
        padding: var(--Spacing-4px-spacing-system-spacing-x-big, 24px);
      }
      @media (max-width: 991px) {
        .div-8 {
          max-width: 100%;
          padding: 0 20px;
        }
      }
      .div-9 {
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: start;
      }
      @media (max-width: 991px) {
        .div-9 {
          max-width: 100%;
        }
      }
      .confidence-personal-skills {
        color: rgba(51, 49, 132, 1);
        font-size: 18px;
        font-weight: 600;
        line-height: 1;
      }
      .twitter-is-seeking-an-experienced-and-innovative-senior-ux-designer-to-join-our-dynamic-design-team-as-a-senior-ux-designer-at-twitter-you-will-play-a-pivotal-role-in-shaping-intuitive-seamless-and-delightful-experiences-for-millions-of-users-worldwide-you-will-collaborate-closely-with-product-managers-engineers-and-other-key-stakeholders-to-understand-user-needs-define-design-solutions-and-drive-product-innovation-in-this-role-you-will-take-ownership-of-the-entire-ux-process-from-user-research-and-ideation-to-wireframing-prototyping-and-delivering-high-fidelity-designs-you-will-use-your-expertise-to-guide-the-design-strategy-conduct-usability-testing-and-iterate-based-on-insights-and-data-driven-decisions-if-youre-passionate-about-user-centered-design-have-a-knack-for-solving-complex-problems-and-excel-in-a-fast-paced-collaborative-environment-we-want-to-hear-from-you {
        color: rgba(9, 9, 11, 1);
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        margin-top: 8px;
      }
      @media (max-width: 991px) {
        .twitter-is-seeking-an-experienced-and-innovative-senior-ux-designer-to-join-our-dynamic-design-team-as-a-senior-ux-designer-at-twitter-you-will-play-a-pivotal-role-in-shaping-intuitive-seamless-and-delightful-experiences-for-millions-of-users-worldwide-you-will-collaborate-closely-with-product-managers-engineers-and-other-key-stakeholders-to-understand-user-needs-define-design-solutions-and-drive-product-innovation-in-this-role-you-will-take-ownership-of-the-entire-ux-process-from-user-research-and-ideation-to-wireframing-prototyping-and-delivering-high-fidelity-designs-you-will-use-your-expertise-to-guide-the-design-strategy-conduct-usability-testing-and-iterate-based-on-insights-and-data-driven-decisions-if-youre-passionate-about-user-centered-design-have-a-knack-for-solving-complex-problems-and-excel-in-a-fast-paced-collaborative-environment-we-want-to-hear-from-you {
          max-width: 100%;
        }
      }
      .div-10 {
        border-radius: var(--Spacing-4px-spacing-system-spacing-sm, 12px);
        background: var(--Colors-white-white, #fff);
        box-shadow: 0px 0px 0px 1px rgba(18, 18, 18, 0.05),
          0px 1px 1px 0px rgba(18, 18, 18, 0.15),
          0px 3px 6px 0px rgba(18, 18, 18, 0.1);
        background-color: var(--Colors-white-white, #fff);
        display: flex;
        margin-top: 24px;
        width: 100%;
        padding-left: 24px;
        padding-right: 24px;
        padding-top: 24px;
        padding-bottom: 24px;
        flex-direction: column;
        font-family: Inter, sans-serif;
        justify-content: center;
        padding: var(--Spacing-4px-spacing-system-spacing-x-big, 24px);
      }
      @media (max-width: 991px) {
        .div-10 {
          max-width: 100%;
          padding: 0 20px;
        }
      }
      .div-11 {
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: start;
      }
      @media (max-width: 991px) {
        .div-11 {
          max-width: 100%;
        }
      }
      .he-performs-well-at-the-following {
        color: rgba(51, 49, 132, 1);
        font-size: 18px;
        font-weight: 600;
        line-height: 1;
      }
      .div-12 {
        border-radius: var(--Spacing-4px-spacing-system-spacing-sm, 12px);
        background: var(--Colors-white-white, #fff);
        box-shadow: 0px 0px 0px 1px rgba(18, 18, 18, 0.05),
          0px 1px 1px 0px rgba(18, 18, 18, 0.15),
          0px 3px 6px 0px rgba(18, 18, 18, 0.1);
        background-color: var(--Colors-white-white, #fff);
        display: flex;
        margin-top: 24px;
        width: 100%;
        padding-left: 24px;
        padding-right: 24px;
        padding-top: 24px;
        padding-bottom: 24px;
        flex-direction: column;
        font-family: Inter, sans-serif;
        justify-content: center;
        padding: var(--Spacing-4px-spacing-system-spacing-x-big, 24px);
      }
      @media (max-width: 991px) {
        .div-12 {
          max-width: 100%;
          padding: 0 20px;
        }
      }
      .div-13 {
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: start;
      }
      @media (max-width: 991px) {
        .div-13 {
          max-width: 100%;
        }
      }
      .what-do-he-need-to-improve {
        color: rgba(51, 49, 132, 1);
        font-size: 18px;
        font-weight: 600;
        line-height: 1;
      }
    `,
  ],
})
export default class MyComponent {}

@NgModule({
  declarations: [MyComponent],
  imports: [CommonModule],
  exports: [MyComponent],
})
export class MyComponentModule {}