import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Component } from "@angular/core";

@Component({
  selector: "my-component, MyComponent",
  template: `
    <div class="1-1-job-seeker-jobs">
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
                  srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/8338af4c3896ac5eda00af734a541c80f761a4600b477a39f7b91e3ef44b9154?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8338af4c3896ac5eda00af734a541c80f761a4600b477a39f7b91e3ef44b9154?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8338af4c3896ac5eda00af734a541c80f761a4600b477a39f7b91e3ef44b9154?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8338af4c3896ac5eda00af734a541c80f761a4600b477a39f7b91e3ef44b9154?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8338af4c3896ac5eda00af734a541c80f761a4600b477a39f7b91e3ef44b9154?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8338af4c3896ac5eda00af734a541c80f761a4600b477a39f7b91e3ef44b9154?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8338af4c3896ac5eda00af734a541c80f761a4600b477a39f7b91e3ef44b9154?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8338af4c3896ac5eda00af734a541c80f761a4600b477a39f7b91e3ef44b9154?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3"
                  class="img-3"
                />
              </div>
              <div class="name">
                <div class="mohamed-khalifa">Mohamed Khalifa</div>
                <div class="product-designer">Product Designer</div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6469b99b16fab72d198c96438f0c1f006936de549532f71a808a1530e21b587?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3"
                class="img-4"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="div-3">
        <div class="div-4">
          <div class="column">
            <div class="navigation-bar">
              <div class="navigation-items">
                <div class="navigation-element">
                  <div class="div-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e4409860d25b72103d776ef9c50f57601a2a4b20eaf814a53a9990ad8025391?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3"
                      class="img-5"
                    />
                    <div class="programs">Home</div>
                  </div>
                  <div class="div-6"></div>
                </div>
                <div class="navigation-element-2">
                  <div class="navigation-element-3">
                    <div class="div-7">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7afb916f97346feb0585b6f64faedd29f767b298ec0dc9f45c8f594f762d116a?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3"
                        class="img-6"
                      />
                      <div class="programs">Upload Documents</div>
                    </div>
                    <div class="div-8"></div>
                  </div>
                </div>
                <div class="navigation-element-4">
                  <div class="div-9">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e93899456f8de977b10e9c5af40b7d969ff0043b4d36f3a52545f181ee3198b3?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3"
                      class="img-7"
                    />
                    <div class="programs">Jobs</div>
                  </div>
                  <div class="div-10"></div>
                </div>
                <div class="navigation-element-5">
                  <div class="div-11">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0513e7c877bccfc32367f448b6281fe521df21d352c19454c0844bac1dffb6b?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3"
                      class="img-8"
                    />
                    <div class="programs">Messaging</div>
                  </div>
                  <div class="div-12"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="column-2">
            <div class="div-13">
              <div class="div-14">
                <div class="job">
                  <div class="div-15">
                    <div class="info">
                      <div class="employers-logo">
                        <img
                          loading="lazy"
                          srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/3ef15a12391f3d6b136c7dffee6acc1acc2f6f1fc8d89af21ef81fb646aeca55?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ef15a12391f3d6b136c7dffee6acc1acc2f6f1fc8d89af21ef81fb646aeca55?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ef15a12391f3d6b136c7dffee6acc1acc2f6f1fc8d89af21ef81fb646aeca55?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ef15a12391f3d6b136c7dffee6acc1acc2f6f1fc8d89af21ef81fb646aeca55?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ef15a12391f3d6b136c7dffee6acc1acc2f6f1fc8d89af21ef81fb646aeca55?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ef15a12391f3d6b136c7dffee6acc1acc2f6f1fc8d89af21ef81fb646aeca55?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ef15a12391f3d6b136c7dffee6acc1acc2f6f1fc8d89af21ef81fb646aeca55?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ef15a12391f3d6b136c7dffee6acc1acc2f6f1fc8d89af21ef81fb646aeca55?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3"
                          class="img-9"
                        />
                      </div>
                      <div class="heading">
                        <div class="heading-2">
                          <div class="div-16">
                            <div class="product-designer-2">
                              Product Designer
                            </div>
                            <div class="adnoc">ADNOC</div>
                          </div>
                          <div class="badge">Full Time</div>
                        </div>
                        <div class="info-2">
                          <div class="loaction">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4888f631ba56a7b45cf7d55093b50fe98328c3dab3907f491377eb5d6f9a217?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3"
                              class="img-10"
                            />
                            <div class="abu-dhabi-uae">Abu Dhabi, UAE</div>
                          </div>
                          <div class="price">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/606ae7adcae62e76ed3a227305894cce6edacde4c70b8df60335bc40fac6c4f4?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3"
                              class="img-11"
                            />
                            <div class="aed-90-k-120-k-year">
                              AED 90k-120k/Year
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="div-17">
                      <div class="number">95.7%</div>
                      <div class="label">Similarity Score</div>
                    </div>
                  </div>
                  <div class="info-3">
                    <div class="div-18">
                      <div class="how-well-do-you-fit-this-role">
                        How well do you fit this role?
                      </div>
                      <div
                        class="youre-a-strong-match-for-this-ux-designer-role-because-you-meet-the-education-requirement-with-a-bachelors-degree-and-have-2-3-years-of-relevant-experience-your-proficiency-in-user-research-wireframing-prototyping-and-design-tools-like-figma-and-adobe-xd-aligns-with-the-jobs-technical-needs-additionally-your-experience-designing-user-centered-experiences-and-collaborating-with-cross-functional-teams-makes-you-an-ideal-candidate"
                      >
                        You’re a strong match for this UX Designer role because
                        you meet the education requirement with a Bachelor’s
                        degree and have 2-3 years of relevant experience. Your
                        proficiency in user research, wireframing, prototyping,
                        and design tools like Figma and Adobe XD aligns with the
                        job's technical needs. Additionally, your experience
                        designing user-centered experiences and collaborating
                        with cross-functional teams makes you an ideal
                        candidate.
                      </div>
                    </div>
                    <div class="div-19">
                      <div class="icon-button">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/961dfdfb080a49ee868f8dffcdf628b1fe5e03d316fd936ed9dadd7edf394b32?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3"
                          class="img-12"
                        />
                      </div>
                      <div class="button">
                        <div class="label-2">Apply Now</div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8da3a3f1960d17615b814c1361d46d9143c30a75d8b486a769266e45f2938292?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3"
                          class="img-13"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="job-2">
                  <div class="div-20">
                    <div class="info">
                      <div class="employers-logo-2">
                        <img
                          loading="lazy"
                          srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/10f7538f2ef2727efd6d4989d82e572cde05f0a89502c64880f270dbe1fda5cd?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/10f7538f2ef2727efd6d4989d82e572cde05f0a89502c64880f270dbe1fda5cd?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/10f7538f2ef2727efd6d4989d82e572cde05f0a89502c64880f270dbe1fda5cd?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/10f7538f2ef2727efd6d4989d82e572cde05f0a89502c64880f270dbe1fda5cd?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/10f7538f2ef2727efd6d4989d82e572cde05f0a89502c64880f270dbe1fda5cd?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/10f7538f2ef2727efd6d4989d82e572cde05f0a89502c64880f270dbe1fda5cd?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/10f7538f2ef2727efd6d4989d82e572cde05f0a89502c64880f270dbe1fda5cd?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/10f7538f2ef2727efd6d4989d82e572cde05f0a89502c64880f270dbe1fda5cd?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3"
                          class="img-14"
                        />
                      </div>
                      <div class="heading">
                        <div class="heading-3">
                          <div class="div-21">
                            <div class="product-designer-3">
                              Product Designer
                            </div>
                            <div class="ministry-of-health">
                              Ministry Of Health
                            </div>
                          </div>
                          <div class="badge">Full Time</div>
                        </div>
                        <div class="info-4">
                          <div class="loaction">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1267710afd5524ad0e3c9e4c9973712237014b992040ef86fd4f84f67415252d?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3"
                              class="img-15"
                            />
                            <div class="abu-dhabi-uae">Abu Dhabi, UAE</div>
                          </div>
                          <div class="price">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/13f120edc3222b9d3c3d5b92e7e93f0d22f2e3f9ef471caae04af856fc166bd2?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3"
                              class="img-16"
                            />
                            <div class="aed-90-k-120-k-year">
                              AED 90k-120k/Year
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="div-22">
                      <div class="number">85.7%</div>
                      <div class="label">Similarity Score</div>
                    </div>
                  </div>
                  <div class="info-5">
                    <div class="div-23">
                      <div class="how-well-do-you-fit-this-role">
                        How well do you fit this role?
                      </div>
                      <div
                        class="youre-a-strong-match-for-this-ux-designer-role-because-you-meet-the-education-requirement-with-a-bachelors-degree-and-have-2-3-years-of-relevant-experience-your-proficiency-in-user-research-wireframing-prototyping-and-design-tools-like-figma-and-adobe-xd-aligns-with-the-jobs-technical-needs-additionally-your-experience-designing-user-centered-experiences-and-collaborating-with-cross-functional-teams-makes-you-an-ideal-candidate"
                      >
                        You’re a strong match for this UX Designer role because
                        you meet the education requirement with a Bachelor’s
                        degree and have 2-3 years of relevant experience. Your
                        proficiency in user research, wireframing, prototyping,
                        and design tools like Figma and Adobe XD aligns with the
                        job's technical needs. Additionally, your experience
                        designing user-centered experiences and collaborating
                        with cross-functional teams makes you an ideal
                        candidate.
                      </div>
                    </div>
                    <div class="div-24">
                      <div class="icon-button">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/961dfdfb080a49ee868f8dffcdf628b1fe5e03d316fd936ed9dadd7edf394b32?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3"
                          class="img-17"
                        />
                      </div>
                      <div class="button">
                        <div class="label-3">Apply Now</div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8da3a3f1960d17615b814c1361d46d9143c30a75d8b486a769266e45f2938292?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3"
                          class="img-18"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="job-3">
                  <div class="div-25">
                    <div class="info">
                      <div class="employers-logo">
                        <img
                          loading="lazy"
                          srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/34a3291ba70299a13dfaddf99d1af2ed48638c2ae5d94d18229915e8d0d5a644?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/34a3291ba70299a13dfaddf99d1af2ed48638c2ae5d94d18229915e8d0d5a644?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/34a3291ba70299a13dfaddf99d1af2ed48638c2ae5d94d18229915e8d0d5a644?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/34a3291ba70299a13dfaddf99d1af2ed48638c2ae5d94d18229915e8d0d5a644?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/34a3291ba70299a13dfaddf99d1af2ed48638c2ae5d94d18229915e8d0d5a644?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/34a3291ba70299a13dfaddf99d1af2ed48638c2ae5d94d18229915e8d0d5a644?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/34a3291ba70299a13dfaddf99d1af2ed48638c2ae5d94d18229915e8d0d5a644?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/34a3291ba70299a13dfaddf99d1af2ed48638c2ae5d94d18229915e8d0d5a644?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3"
                          class="img-19"
                        />
                      </div>
                      <div class="heading">
                        <div class="heading-4">
                          <div class="div-26">
                            <div class="product-designer-4">
                              Product Designer
                            </div>
                            <div class="emirates-islamic-bank">
                              Emirates Islamic Bank
                            </div>
                          </div>
                          <div class="badge">Full Time</div>
                        </div>
                        <div class="info-6">
                          <div class="loaction">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1267710afd5524ad0e3c9e4c9973712237014b992040ef86fd4f84f67415252d?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3"
                              class="img-20"
                            />
                            <div class="abu-dhabi-uae">Abu Dhabi, UAE</div>
                          </div>
                          <div class="price">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8ea57b3c66b6a13178391ce332292d1c7a23b63213c583b80e30117d3478acd?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3"
                              class="img-21"
                            />
                            <div class="aed-90-k-120-k-year">
                              AED 90k-120k/Year
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="div-27">
                      <div class="number">55.64%</div>
                      <div class="label">Similarity Score</div>
                    </div>
                  </div>
                  <div class="info-7">
                    <div class="div-28">
                      <div class="how-well-do-you-fit-this-role">
                        How well do you fit this role?
                      </div>
                      <div
                        class="youre-a-strong-match-for-this-ux-designer-role-because-you-meet-the-education-requirement-with-a-bachelors-degree-and-have-2-3-years-of-relevant-experience-your-proficiency-in-user-research-wireframing-prototyping-and-design-tools-like-figma-and-adobe-xd-aligns-with-the-jobs-technical-needs-additionally-your-experience-designing-user-centered-experiences-and-collaborating-with-cross-functional-teams-makes-you-an-ideal-candidate"
                      >
                        You’re a strong match for this UX Designer role because
                        you meet the education requirement with a Bachelor’s
                        degree and have 2-3 years of relevant experience. Your
                        proficiency in user research, wireframing, prototyping,
                        and design tools like Figma and Adobe XD aligns with the
                        job's technical needs. Additionally, your experience
                        designing user-centered experiences and collaborating
                        with cross-functional teams makes you an ideal
                        candidate.
                      </div>
                    </div>
                    <div class="div-29">
                      <div class="icon-button">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/961dfdfb080a49ee868f8dffcdf628b1fe5e03d316fd936ed9dadd7edf394b32?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3"
                          class="img-22"
                        />
                      </div>
                      <div class="button">
                        <div class="label-4">Apply Now</div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8da3a3f1960d17615b814c1361d46d9143c30a75d8b486a769266e45f2938292?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3"
                          class="img-23"
                        />
                      </div>
                    </div>
                  </div>
                </div>
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
      .1-1-job-seeker-jobs {
        background-color: rgba(250, 250, 250, 1);
        display: flex;
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
        margin: auto 0;
        font: 14px/1 Poppins, sans-serif;
      }
      .mohamed-khalifa {
        color: rgba(9, 9, 11, 1);
        font-weight: 500;
      }
      .product-designer {
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
        width: 100%;
        max-width: 1400px;
      }
      @media (max-width: 991px) {
        .div-3 {
          max-width: 100%;
        }
      }
      .div-4 {
        gap: 20px;
        display: flex;
      }
      @media (max-width: 991px) {
        .div-4 {
          flex-direction: column;
          align-items: stretch;
          gap: 0px;
        }
      }
      .column {
        display: flex;
        flex-direction: column;
        line-height: normal;
        width: 19%;
        margin-left: 0px;
      }
      @media (max-width: 991px) {
        .column {
          width: 100%;
        }
      }
      .navigation-bar {
        background-color: rgba(255, 255, 255, 1);
        border-color: rgba(228, 228, 231, 1);
        border-right-width: 1px;
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        align-items: center;
        color: rgba(82, 82, 90, 1);
        justify-content: start;
        width: 100%;
        padding: 24px 0 1019px;
        font: 400 14px/1 Poppins, sans-serif;
      }
      @media (max-width: 991px) {
        .navigation-bar {
          margin-top: 24px;
          padding-bottom: 100px;
        }
      }
      .navigation-items {
        display: flex;
        width: 224px;
        max-width: 100%;
        flex-direction: column;
        justify-content: start;
      }
      .navigation-element {
        border-radius: 8px;
        display: flex;
        min-height: 40px;
        width: 100%;
        max-width: 224px;
        align-items: center;
        gap: 40px 94px;
        white-space: nowrap;
        justify-content: space-between;
        padding: 10px 8px;
      }
      @media (max-width: 991px) {
        .navigation-element {
          white-space: initial;
        }
      }
      .div-5 {
        align-self: stretch;
        display: flex;
        align-items: center;
        gap: 8px;
        justify-content: start;
        margin: auto 0;
      }
      @media (max-width: 991px) {
        .div-5 {
          white-space: initial;
        }
      }
      .img-5 {
        aspect-ratio: 1;
        object-fit: contain;
        object-position: center;
        width: 14px;
        align-self: stretch;
        margin: auto 0;
      }
      .programs {
        align-self: stretch;
        margin: auto 0;
      }
      .div-6 {
        align-self: stretch;
        display: flex;
        min-height: 20px;
        gap: 4px;
        margin: auto 0;
      }
      .navigation-element-2 {
        display: flex;
        margin-top: 8px;
        width: 100%;
        max-width: 224px;
        align-items: start;
        justify-content: start;
      }
      .navigation-element-3 {
        border-radius: 8px;
        display: flex;
        min-height: 40px;
        width: 224px;
        align-items: center;
        gap: 3px;
        justify-content: space-between;
        padding: 10px 8px;
      }
      .div-7 {
        align-self: stretch;
        display: flex;
        align-items: center;
        gap: 8px;
        justify-content: start;
        margin: auto 0;
      }
      .img-6 {
        aspect-ratio: 1;
        object-fit: contain;
        object-position: center;
        width: 14px;
        align-self: stretch;
        margin: auto 0;
      }
      .div-8 {
        align-self: stretch;
        display: flex;
        min-height: 20px;
        gap: 4px;
        margin: auto 0;
      }
      .navigation-element-4 {
        border-radius: 8px;
        background-color: rgba(51, 49, 132, 1);
        display: flex;
        margin-top: 8px;
        min-height: 40px;
        width: 100%;
        max-width: 224px;
        align-items: center;
        gap: 40px 100px;
        color: rgba(255, 255, 255, 1);
        font-weight: 700;
        white-space: nowrap;
        justify-content: space-between;
        padding: 10px 8px;
      }
      @media (max-width: 991px) {
        .navigation-element-4 {
          white-space: initial;
        }
      }
      .div-9 {
        align-self: stretch;
        display: flex;
        align-items: center;
        gap: 8px;
        justify-content: start;
        margin: auto 0;
      }
      @media (max-width: 991px) {
        .div-9 {
          white-space: initial;
        }
      }
      .img-7 {
        aspect-ratio: 1;
        object-fit: contain;
        object-position: center;
        width: 14px;
        align-self: stretch;
        margin: auto 0;
      }
      .div-10 {
        align-self: stretch;
        display: flex;
        min-height: 20px;
        gap: 4px;
        margin: auto 0;
      }
      .navigation-element-5 {
        border-radius: 8px;
        display: flex;
        margin-top: 8px;
        min-height: 40px;
        width: 100%;
        max-width: 224px;
        align-items: center;
        gap: 40px 59px;
        white-space: nowrap;
        justify-content: space-between;
        padding: 10px 8px;
      }
      @media (max-width: 991px) {
        .navigation-element-5 {
          white-space: initial;
        }
      }
      .div-11 {
        align-self: stretch;
        display: flex;
        align-items: center;
        gap: 8px;
        justify-content: start;
        margin: auto 0;
      }
      @media (max-width: 991px) {
        .div-11 {
          white-space: initial;
        }
      }
      .img-8 {
        aspect-ratio: 1;
        object-fit: contain;
        object-position: center;
        width: 14px;
        align-self: stretch;
        margin: auto 0;
      }
      .div-12 {
        align-self: stretch;
        display: flex;
        min-height: 20px;
        gap: 4px;
        margin: auto 0;
      }
      .column-2 {
        display: flex;
        flex-direction: column;
        line-height: normal;
        width: 81%;
        margin-left: 20px;
      }
      @media (max-width: 991px) {
        .column-2 {
          width: 100%;
        }
      }
      .div-13 {
        display: flex;
        align-items: center;
        gap: 24px;
        align-self: stretch;
        justify-content: start;
        margin: auto 0;
      }
      @media (max-width: 991px) {
        .div-13 {
          max-width: 100%;
          margin-top: 40px;
        }
      }
      .div-14 {
        align-self: stretch;
        display: flex;
        min-width: 240px;
        width: 100%;
        flex-direction: column;
        justify-content: start;
        flex: 1;
        flex-basis: 0%;
        margin: auto 0;
      }
      @media (max-width: 991px) {
        .div-14 {
          max-width: 100%;
        }
      }
      .job {
        border-radius: var(--Spacing-4px-spacing-system-spacing-sm, 12px);
        border: 1px solid var(--Gray-100, #e4e5e8);
        background: var(--Gray-White, #fff);
        background-color: var(--Gray-White, #fff);
        display: flex;
        width: 100%;
        padding-left: 24px;
        padding-right: 24px;
        padding-top: 24px;
        padding-bottom: 24px;
        flex-direction: column;
        overflow: hidden;
        justify-content: start;
        padding: var(--Spacing-4px-spacing-system-spacing-x-big, 24px);
        gap: var(--Spacing-4px-spacing-system-spacing-x-big, 24px);
      }
      @media (max-width: 991px) {
        .job {
          max-width: 100%;
          padding: 0 20px;
        }
      }
      .div-15 {
        display: flex;
        width: 100%;
        align-items: center;
        gap: 40px 100px;
        justify-content: space-between;
        flex-wrap: wrap;
      }
      @media (max-width: 991px) {
        .div-15 {
          max-width: 100%;
        }
      }
      .info {
        align-self: stretch;
        display: flex;
        min-width: 240px;
        align-items: center;
        gap: 16px;
        justify-content: start;
        margin: auto 0;
      }
      .employers-logo {
        border-radius: 6px;
        align-self: stretch;
        display: flex;
        min-height: 78px;
        gap: 10px;
        justify-content: center;
        width: 78px;
        margin: auto 0;
      }
      .img-9 {
        aspect-ratio: 0.78;
        object-fit: contain;
        object-position: center;
        width: 61px;
      }
      .heading {
        align-self: stretch;
        display: flex;
        min-width: 240px;
        flex-direction: column;
        font-family: Poppins, sans-serif;
        justify-content: start;
        margin: auto 0;
      }
      .heading-2 {
        align-self: start;
        display: flex;
        align-items: start;
        gap: 8px;
        justify-content: center;
      }
      .div-16 {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .product-designer-2 {
        color: var(--Gray-900, #18191c);
        font-size: 18px;
        font-weight: 500;
        line-height: 2;
      }
      .adnoc {
        color: rgba(113, 113, 121, 1);
        font-size: 14px;
        font-weight: 400;
        line-height: 1;
      }
      .badge {
        align-self: stretch;
        border-radius: 52px;
        background-color: rgba(225, 236, 239, 1);
        min-height: 28px;
        gap: 10px;
        font-size: 14px;
        color: rgba(0, 136, 208, 1);
        font-weight: 500;
        line-height: 1;
        padding: 4px 12px;
      }
      .info-2 {
        display: flex;
        margin-top: 8px;
        align-items: center;
        gap: 16px;
        font-size: 14px;
        color: rgba(113, 113, 121, 1);
        font-weight: 400;
        line-height: 1;
        justify-content: start;
      }
      .loaction {
        align-self: stretch;
        display: flex;
        align-items: center;
        gap: 6px;
        justify-content: start;
        margin: auto 0;
      }
      .img-10 {
        aspect-ratio: 1;
        object-fit: contain;
        object-position: center;
        width: 22px;
        align-self: stretch;
        margin: auto 0;
      }
      .abu-dhabi-uae {
        align-self: stretch;
        margin: auto 0;
      }
      .price {
        align-self: stretch;
        display: flex;
        align-items: center;
        gap: 4px;
        justify-content: start;
        margin: auto 0;
      }
      .img-11 {
        aspect-ratio: 1;
        object-fit: contain;
        object-position: center;
        width: 18px;
        align-self: stretch;
        margin: auto 0;
      }
      .aed-90-k-120-k-year {
        align-self: stretch;
        margin: auto 0;
      }
      .div-17 {
        border-radius: 12px;
        align-self: stretch;
        display: flex;
        min-height: 66px;
        flex-direction: column;
        font-family: Poppins, sans-serif;
        color: rgba(51, 49, 132, 1);
        text-align: center;
        justify-content: center;
        width: 174px;
        margin: auto 0;
        padding: 13px 16px;
        border: 1px solid rgba(51, 49, 132, 1);
      }
      .number {
        font-size: 18px;
        font-weight: 700;
        line-height: 1;
      }
      .label {
        font-size: 12px;
        font-weight: 500;
        line-height: 1;
        align-self: center;
        margin-top: 8px;
      }
      .info-3 {
        display: flex;
        margin-top: 24px;
        width: 100%;
        flex-direction: column;
        align-items: end;
        justify-content: end;
      }
      @media (max-width: 991px) {
        .info-3 {
          max-width: 100%;
        }
      }
      .div-18 {
        display: flex;
        width: 716px;
        max-width: 100%;
        flex-direction: column;
        font-family: Poppins, sans-serif;
        font-weight: 500;
        justify-content: center;
      }
      .how-well-do-you-fit-this-role {
        color: rgba(33, 0, 93, 1);
        font-size: 16px;
        line-height: 28px;
      }
      .youre-a-strong-match-for-this-ux-designer-role-because-you-meet-the-education-requirement-with-a-bachelors-degree-and-have-2-3-years-of-relevant-experience-your-proficiency-in-user-research-wireframing-prototyping-and-design-tools-like-figma-and-adobe-xd-aligns-with-the-jobs-technical-needs-additionally-your-experience-designing-user-centered-experiences-and-collaborating-with-cross-functional-teams-makes-you-an-ideal-candidate {
        color: rgba(29, 27, 32, 1);
        font-size: 14px;
        line-height: 24px;
        margin-top: 8px;
      }
      @media (max-width: 991px) {
        .youre-a-strong-match-for-this-ux-designer-role-because-you-meet-the-education-requirement-with-a-bachelors-degree-and-have-2-3-years-of-relevant-experience-your-proficiency-in-user-research-wireframing-prototyping-and-design-tools-like-figma-and-adobe-xd-aligns-with-the-jobs-technical-needs-additionally-your-experience-designing-user-centered-experiences-and-collaborating-with-cross-functional-teams-makes-you-an-ideal-candidate {
          max-width: 100%;
        }
      }
      .div-19 {
        display: flex;
        margin-top: 32px;
        align-items: start;
        gap: 12px;
        justify-content: start;
      }
      .icon-button {
        border-radius: 5px;
        background-color: rgba(243, 252, 255, 1);
        display: flex;
        align-items: start;
        gap: 10px;
        justify-content: start;
        width: 48px;
        padding: 6px 12px;
      }
      .img-12 {
        aspect-ratio: 1;
        object-fit: contain;
        object-position: center;
        width: 24px;
      }
      .button {
        justify-content: center;
        align-items: center;
        border-radius: var(--Spacing-4px-spacing-system-spacing-x-sm, 8px);
        border: 1px solid var(--Button-inner-glow, rgba(255, 255, 255, 0.3));
        background: var(--Primary-600, #333184);
        box-shadow: 0px 15px 30px 0px rgba(8, 62, 134, 0.1);
        background-color: var(--Primary-600, #333184);
        display: flex;
        gap: 8px;
        overflow: hidden;
        color: rgba(255, 255, 255, 1);
        width: 126px;
        padding: 8px 13px 8px 14px;
        font: 500 14px/1 Poppins, sans-serif;
      }
      .label-2 {
        transform: rotate(-1.2182014612521547e-16rad);
        align-self: stretch;
        margin: auto 0;
      }
      .img-13 {
        aspect-ratio: 1;
        object-fit: contain;
        object-position: center;
        width: 16px;
        align-self: stretch;
        margin: auto 0;
      }
      .job-2 {
        border-radius: var(--Spacing-4px-spacing-system-spacing-sm, 12px);
        border: 1px solid var(--Gray-100, #e4e5e8);
        background: var(--Gray-White, #fff);
        background-color: var(--Gray-White, #fff);
        display: flex;
        margin-top: 16px;
        width: 100%;
        padding-left: 24px;
        padding-right: 24px;
        padding-top: 24px;
        padding-bottom: 24px;
        flex-direction: column;
        overflow: hidden;
        justify-content: start;
        padding: var(--Spacing-4px-spacing-system-spacing-x-big, 24px);
        gap: var(--Spacing-4px-spacing-system-spacing-x-big, 24px);
      }
      @media (max-width: 991px) {
        .job-2 {
          max-width: 100%;
          padding: 0 20px;
        }
      }
      .div-20 {
        display: flex;
        width: 100%;
        align-items: center;
        gap: 40px 100px;
        justify-content: space-between;
        flex-wrap: wrap;
      }
      @media (max-width: 991px) {
        .div-20 {
          max-width: 100%;
        }
      }
      .employers-logo-2 {
        border-radius: 6px;
        align-self: stretch;
        display: flex;
        min-height: 78px;
        align-items: center;
        gap: 10px;
        justify-content: center;
        width: 78px;
        margin: auto 0;
      }
      .img-14 {
        aspect-ratio: 1;
        object-fit: contain;
        object-position: center;
        width: 78px;
        align-self: stretch;
        margin: auto 0;
      }
      .heading-3 {
        align-self: start;
        display: flex;
        align-items: start;
        gap: 8px;
        justify-content: center;
      }
      .div-21 {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .product-designer-3 {
        color: var(--Gray-900, #18191c);
        font-size: 18px;
        font-weight: 500;
        line-height: 2;
      }
      .ministry-of-health {
        color: rgba(113, 113, 121, 1);
        font-size: 14px;
        font-weight: 400;
        line-height: 1;
      }
      .info-4 {
        display: flex;
        margin-top: 8px;
        align-items: center;
        gap: 16px;
        font-size: 14px;
        color: rgba(113, 113, 121, 1);
        font-weight: 400;
        line-height: 1;
        justify-content: start;
      }
      .img-15 {
        aspect-ratio: 1;
        object-fit: contain;
        object-position: center;
        width: 22px;
        align-self: stretch;
        margin: auto 0;
      }
      .img-16 {
        aspect-ratio: 1;
        object-fit: contain;
        object-position: center;
        width: 18px;
        align-self: stretch;
        margin: auto 0;
      }
      .div-22 {
        border-radius: 12px;
        align-self: stretch;
        display: flex;
        min-height: 66px;
        flex-direction: column;
        font-family: Poppins, sans-serif;
        color: rgba(51, 49, 132, 1);
        text-align: center;
        justify-content: center;
        width: 174px;
        margin: auto 0;
        padding: 13px 16px;
        border: 1px solid rgba(51, 49, 132, 1);
      }
      .info-5 {
        display: flex;
        margin-top: 24px;
        width: 100%;
        flex-direction: column;
        align-items: end;
        justify-content: end;
      }
      @media (max-width: 991px) {
        .info-5 {
          max-width: 100%;
        }
      }
      .div-23 {
        display: flex;
        width: 716px;
        max-width: 100%;
        flex-direction: column;
        font-family: Poppins, sans-serif;
        font-weight: 500;
        justify-content: center;
      }
      .div-24 {
        display: flex;
        margin-top: 32px;
        align-items: start;
        gap: 12px;
        justify-content: start;
      }
      .img-17 {
        aspect-ratio: 1;
        object-fit: contain;
        object-position: center;
        width: 24px;
      }
      .label-3 {
        transform: rotate(-1.2182014612521547e-16rad);
        align-self: stretch;
        margin: auto 0;
      }
      .img-18 {
        aspect-ratio: 1;
        object-fit: contain;
        object-position: center;
        width: 16px;
        align-self: stretch;
        margin: auto 0;
      }
      .job-3 {
        border-radius: var(--Spacing-4px-spacing-system-spacing-sm, 12px);
        border: 1px solid var(--Gray-100, #e4e5e8);
        background: var(--Gray-White, #fff);
        background-color: var(--Gray-White, #fff);
        display: flex;
        margin-top: 16px;
        width: 100%;
        padding-left: 24px;
        padding-right: 24px;
        padding-top: 24px;
        padding-bottom: 24px;
        flex-direction: column;
        overflow: hidden;
        justify-content: start;
        padding: var(--Spacing-4px-spacing-system-spacing-x-big, 24px);
        gap: var(--Spacing-4px-spacing-system-spacing-x-big, 24px);
      }
      @media (max-width: 991px) {
        .job-3 {
          max-width: 100%;
          padding: 0 20px;
        }
      }
      .div-25 {
        display: flex;
        width: 100%;
        align-items: center;
        gap: 40px 100px;
        justify-content: space-between;
        flex-wrap: wrap;
      }
      @media (max-width: 991px) {
        .div-25 {
          max-width: 100%;
        }
      }
      .img-19 {
        aspect-ratio: 1;
        object-fit: contain;
        object-position: center;
        width: 78px;
        flex: 1;
        flex-basis: 0%;
      }
      .heading-4 {
        align-self: start;
        display: flex;
        align-items: start;
        gap: 8px;
        justify-content: center;
      }
      .div-26 {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .product-designer-4 {
        color: var(--Gray-900, #18191c);
        font-size: 18px;
        font-weight: 500;
        line-height: 2;
      }
      .emirates-islamic-bank {
        color: rgba(113, 113, 121, 1);
        font-size: 14px;
        font-weight: 400;
        line-height: 1;
      }
      .info-6 {
        display: flex;
        margin-top: 8px;
        align-items: center;
        gap: 16px;
        font-size: 14px;
        color: rgba(113, 113, 121, 1);
        font-weight: 400;
        line-height: 1;
        justify-content: start;
      }
      .img-20 {
        aspect-ratio: 1;
        object-fit: contain;
        object-position: center;
        width: 22px;
        align-self: stretch;
        margin: auto 0;
      }
      .img-21 {
        aspect-ratio: 1;
        object-fit: contain;
        object-position: center;
        width: 18px;
        align-self: stretch;
        margin: auto 0;
      }
      .div-27 {
        border-radius: 12px;
        align-self: stretch;
        display: flex;
        min-height: 66px;
        flex-direction: column;
        font-family: Poppins, sans-serif;
        color: rgba(51, 49, 132, 1);
        text-align: center;
        justify-content: center;
        width: 174px;
        margin: auto 0;
        padding: 13px 16px;
        border: 1px solid rgba(51, 49, 132, 1);
      }
      .info-7 {
        display: flex;
        margin-top: 24px;
        width: 100%;
        flex-direction: column;
        align-items: end;
        justify-content: end;
      }
      @media (max-width: 991px) {
        .info-7 {
          max-width: 100%;
        }
      }
      .div-28 {
        display: flex;
        width: 716px;
        max-width: 100%;
        flex-direction: column;
        font-family: Poppins, sans-serif;
        font-weight: 500;
        justify-content: center;
      }
      .div-29 {
        display: flex;
        margin-top: 32px;
        align-items: start;
        gap: 12px;
        justify-content: start;
      }
      .img-22 {
        aspect-ratio: 1;
        object-fit: contain;
        object-position: center;
        width: 24px;
      }
      .label-4 {
        transform: rotate(-1.2182014612521547e-16rad);
        align-self: stretch;
        margin: auto 0;
      }
      .img-23 {
        aspect-ratio: 1;
        object-fit: contain;
        object-position: center;
        width: 16px;
        align-self: stretch;
        margin: auto 0;
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