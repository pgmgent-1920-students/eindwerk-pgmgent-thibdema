import React from 'react';

import './FAQPage.scss';

const FAQPage = () => {
  return(
    <div className="faq">
      <div className="page-header page-header-dark bg-gradient-primary-to-secondary" style={{marginTop: '5rem', backgroundColor: 'var(--dark-blue)', paddingTop: '8rem'}}>
        <div className="page-header-content pt-10">
            <div className="container text-center">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <h1 className="page-header-title mb-3" style={{color: 'var(--white)'}}>Knowledgebase</h1>
                        <p className="page-header-text" style={{color: 'rgba(255, 255, 255, 0.5)'}}>Here are some answers to some commonly asked questions</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="svg-border-rounded text-light">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.54 17.34" preserveAspectRatio="none" fill="currentColor"><path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path></svg>
        </div>
      </div>
      <section className="bg-light py-10">
        <div className="container">
          <div className="d-flex align-items-center mb-5">
            <div className="icon-stack icon-stack-lg bg-primary text-white d-flex align-items-center justify-content-center" style={{height: '4rem', width: '4rem', fontSize: '1.5rem', borderRadius: '100%'}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></div>
            <div className="ml-3">
              <h2 className="mb-0">Account</h2>
              <p className="lead mb-0">Let's see if we can help.</p>
            </div>
          </div>
          <div className="accordion accordion-faq mb-5" id="authAccordion">
            <div className="card border-bottom">
                <div className="card-body">
                  <div className="accordion-faq-title">
                    <div className="mr-2">
                        <h4 className="mb-0">Authentication issues</h4>
                        <p className="card-text text-gray-500">
                          Issues related to logging in, registering a new account, and setting your account password
                        </p>
                    </div>
                  <div className="badge badge-success-soft badge-pill text-success">3 Answers</div>
                </div>
              </div>
            </div>
            <div className="card accordion-faq-item">
                <span className="card-header collapsed"  id="authHeadingOne" data-toggle="collapse" data-target="#authCollapseOne" aria-expanded="false" aria-controls="authCollapseOne"><div className="accordion-faq-item-heading">I can't remember my account email address.<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-down accordion-faq-item-heading-arrow"><polyline points="6 9 12 15 18 9"></polyline></svg></div></span>
                <div className="collapse" id="authCollapseOne" aria-labelledby="authHeadingOne" data-parent="#authAccordion" ><div className="card-body border-bottom">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</div></div>
            </div>
            <div className="card accordion-faq-item">
                <span className="card-header collapsed" id="authHeadingTwo" data-toggle="collapse" data-target="#authCollapseTwo" aria-expanded="true" aria-controls="authCollapseTwo" ><div className="accordion-faq-item-heading">Why doesn't my password work?<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-down accordion-faq-item-heading-arrow"><polyline points="6 9 12 15 18 9"></polyline></svg></div></span>
                <div className="collapse" id="authCollapseTwo" aria-labelledby="authHeadingTwo" data-parent="#authAccordion"><div className="card-body border-bottom">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</div></div>
            </div>
            <div className="card accordion-faq-item">
                <span className="card-header collapsed"  id="authHeadingThree" data-toggle="collapse" data-target="#authCollapseThree" aria-expanded="true" aria-controls="authCollapseThree" ><div className="accordion-faq-item-heading">Why do I keep getting logged out of my account?<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-down accordion-faq-item-heading-arrow"><polyline points="6 9 12 15 18 9"></polyline></svg></div></span>
                <div className="collapse" id="authCollapseThree" aria-labelledby="authHeadingThree" data-parent="#authAccordion"><div className="card-body border-bottom">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</div></div>
            </div>
          </div>
          <div className="accordion accordion-faq" id="billingAccordion">
            <div className="card border-bottom">
              <div className="card-body">
                <div className="accordion-faq-title">
                  <div className="mr-2">
                    <h4 className="mb-0">Billing</h4>
                    <p className="card-text text-gray-500">
                      Issues related to logging in, registering a new account, and setting your account password
                    </p>
                  </div>
                <div className="badge badge-success-soft badge-pill text-success">3 Answers</div>
              </div>
            </div>
          </div>
          <div className="card accordion-faq-item">
              <span className="card-header collapsed"  id="billingHeadingOne" data-toggle="collapse" data-target="#billingCollapseOne" aria-expanded="true" aria-controls="billingCollapseOne" ><div className="accordion-faq-item-heading">I can't remember my account email address.<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-down accordion-faq-item-heading-arrow"><polyline points="6 9 12 15 18 9"></polyline></svg></div></span>
              <div className="collapse" id="billingCollapseOne" aria-labelledby="authHeadingOne" data-parent="#billingAccordion"><div className="card-body border-bottom">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</div></div>
          </div>
          <div className="card accordion-faq-item">
              <span className="card-header collapsed" id="billingHeadingTwo" data-toggle="collapse" data-target="#billingCollapseTwo" aria-expanded="true" aria-controls="billingCollapseTwo"  ><div className="accordion-faq-item-heading">Why doesn't my password work?<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-down accordion-faq-item-heading-arrow"><polyline points="6 9 12 15 18 9"></polyline></svg></div></span>
              <div className="collapse" id="billingCollapseTwo" aria-labelledby="authHeadingTwo" data-parent="#billingAccordion"><div className="card-body border-bottom">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</div></div>
          </div>
          <div className="card accordion-faq-item">
              <span className="card-header collapsed"  id="billingHeadingThree" data-toggle="collapse" data-target="#billingCollapseThree" aria-expanded="true" aria-controls="billingCollapseThree"><div className="accordion-faq-item-heading">Why do I keep getting logged out of my account?<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-down accordion-faq-item-heading-arrow"><polyline points="6 9 12 15 18 9"></polyline></svg></div></span>
              <div className="collapse" id="billingCollapseThree" aria-labelledby="authHeadingThree" data-parent="#billingAccordion"><div className="card-body border-bottom">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</div></div>
          </div>
            </div>
            <hr className="my-5" />
            <div className="row text-center">
                <div className="col-lg-4 mb-5 mb-lg-0">
                    <span className="card card-link border-top border-top-lg h-100 lift" ><div className="card-body p-5">
                            <div className="icon-stack icon-stack-lg bg-primary-soft text-primary mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>
                            <h6>Account</h6>
                            <p className="card-text">Issues related to logging in, out, or about multiple devices.</p>
                        </div>
                        <div className="card-footer bg-transparent pt-0 pb-5"><div className="badge badge-pill badge-light font-weight-normal px-3 py-2">21 Entries</div></div></span>
                </div>
                <div className="col-lg-4 mb-5 mb-lg-0">
                    <span className="card card-link border-top border-top-lg border-green h-100 lift" ><div className="card-body p-5">
                            <div className="icon-stack icon-stack-lg bg-green-soft text-green mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></div>
                            <h6>Integrations</h6>
                            <p className="card-text">Connecting with 3rd party apps to exchange data.</p>
                        </div>
                        <div className="card-footer bg-transparent pt-0 pb-5"><div className="badge badge-pill badge-light font-weight-normal px-3 py-2">9 Entries</div></div></span>
                </div>
                <div className="col-lg-4">
                    <span className="card card-link border-top border-top-lg border-yellow h-100 lift" ><div className="card-body p-5">
                            <div className="icon-stack icon-stack-lg bg-yellow-soft text-yellow mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></div>
                            <h6>Billing</h6>
                            <p className="card-text">Issues with payments or invoicing.</p>
                        </div>
                        <div className="card-footer bg-transparent pt-0 pb-5"><div className="badge badge-pill badge-light font-weight-normal px-3 py-2">14 Entries</div></div></span>
                </div>
            </div>
        </div>
        <div className="svg-border-rounded text-dark">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.54 17.34" preserveAspectRatio="none" fill="currentColor"><path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path></svg>
        </div>
    </section>
    </div>
  );
};

export default FAQPage;