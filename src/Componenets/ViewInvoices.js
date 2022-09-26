import { React, useEffect, useState } from "react";



const ViewInvoices = () => {

    return (
        <>
            <section class="admin-wrapper">
      <div class="sidebar-wrapper">
         <div class="sidebar-main-logo">
            <img src="/assets/img/main-logo.png" alt=""/>
         </div>
         <div class="flex-shrink-0 ">
            <ul class="list-unstyled ps-0">
               <li class="">
                  <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse"
                     data-bs-target="#user-collapse" aria-expanded="false">
                     User Management<i class="fa fa-caret-down"></i>
                  </button>
                  <div class="collapse" id="user-collapse">
                     <ul class="btn-toggle-nav">
                        <li class=""><a href="index.html" class="link-dark rounded">Manage Client </a></li>
                        <li><a href="add-client.html" class="link-dark rounded">Add Client</a></li>
                     </ul>
                  </div>
               </li>
               <li class="">
                  <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse"
                     data-bs-target="#firm-collapse" aria-expanded="false">
                     Case Management<i class="fa fa-caret-down"></i>
                  </button>
                  <div class="collapse" id="firm-collapse">
                     <ul class="btn-toggle-nav">
                        <li class=""><a href="my-cases.html" class="link-dark rounded">My Cases</a></li>
                        <li><a href="add-case.html" class="link-dark rounded">Add new case</a></li>
                     </ul>
                  </div>
               </li>
               <li class="">
                  <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse"
                     data-bs-target="#manexpert-collapse" aria-expanded="false">
                     Activity Management<i class="fa fa-caret-down"></i>
                  </button>
                  <div class="collapse" id="manexpert-collapse">
                     <ul class="btn-toggle-nav">
                        <li class=""><a href="time-exp.html" class="link-dark rounded">Time & Expenses entry</a></li>
                     </ul>
                  </div>
               </li>
               <li class="active">
                  <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse"
                     data-bs-target="#case-collapse" aria-expanded="false">
                     Financial Management<i class="fa fa-caret-down"></i>
                  </button>
                  <div class="collapse show" id="case-collapse">
                     <ul class="btn-toggle-nav">
                        <li class="active"><a href="view-invoice.html" class="link-dark rounded">View Invoices</a></li>
                        <li><a href="add-invoice.html" class="link-dark rounded">Add new Invoice</a></li>
                        <li><a href="view-req-fund.html" class="link-dark rounded">View Requested Funds</a></li>
                        <li><a href="add-req-fund.html" class="link-dark rounded">Add new Request fund</a></li>
                        <li><a href="statement.html" class="link-dark rounded">Statement</a></li>
                     </ul>
                  </div>
               </li>
               <li class="">
                  <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse"
                     data-bs-target="#activity-collapse" aria-expanded="false">
                     Calendaring<i class="fa fa-caret-down"></i>
                  </button>
                  <div class="collapse" id="activity-collapse">
                     <ul class="btn-toggle-nav">
                        <li><a href="event.html" class="link-dark rounded">Events</a>
                        </li>
                        <li><a href="add-event.html" class="link-dark rounded">Add Event</a></li>
                     </ul>
                  </div>

               </li>
               <li class="">
                  <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse"
                     data-bs-target="#financial-collapse" aria-expanded="false">
                     HR / Payroll<i class="fa fa-caret-down"></i>
                  </button>
                  <div class="collapse" id="financial-collapse">
                     <ul class="btn-toggle-nav">
                        <li class=""><a href="manage-employe.html" class="link-dark rounded">Manage Employee</a></li>
                        <li><a href="add-employee.html" class="link-dark rounded">Add Employee</a></li>
                        <li><a href="manage-role.html" class="link-dark rounded">Manage Role</a></li>
                        <li><a href="add-role.html" class="link-dark rounded">Add Role</a></li>
                        <li><a href="manage-salaries.html" class="link-dark rounded">Manage Salaries</a></li>
                     </ul>
                  </div>
               </li>
               <li class="">
                  <a href="manage-subscription.html"><button class="btn btn-toggle align-items-center rounded">
                      Manage Subscription
                   </button></a>
               </li>
               <li class="">
                  <a href="settings.html"><button class="btn btn-toggle align-items-center rounded ">
                      Settings
                   </button></a>
               </li>
            </ul>
         </div>
         <div class="logut-sidebar-wrp">
            <a href="javascript:;">Logout</a>
         </div>
      </div>
     
      <div class="admin-content-wrapper">
    
        

        <div class="admin-title-header mt-0">
            <div class="row">
               <div class="col-lg-9">
                  <div class="">
                     <div class="admin-title-flex">
                        <h3>Invoices</h3>
                        <ul class="archive-ul">
                            <li class="active"><a href="javascript:;">All</a></li>
                            <li><a href="javascript:;">Unsent</a></li>
                            <li><a href="javascript:;">Sent</a></li>
                            <li><a href="javascript:;">Paid</a></li>
                            <li><a href="javascript:;">Partial</a></li>
                            <li><a href="javascript:;">Overdue</a></li>
                            <li><a href="javascript:;">Forwarded</a></li>
                            <li><a href="javascript:;">Draft</a></li>
                            <li><a href="javascript:;">Batches</a></li>
                         </ul>
                     </div>
                  </div>
               </div>
               <div class="col-lg-3">
                  <div class="admin-short-nav-buttons">
                     <div class="table-btn-group">
                        <a href="add-invoice.html"><button class="btn black-fill" type="button">Create Invoice</button></a>
 
                     </div>
 
                  </div>
               </div>
            </div>
         </div>

         <div class="row mt-3">
            <div class="col-lg-3">
               <div class="filter-input-box">
                  <input type="text" class="form-control" placeholder="Search Invoice"/>
                  <img src="/assets/img/search-icon.png" alt=""/>
               </div>
            </div>
         </div>

         <div class="invoice-overview-wrp">
            <div class="io-head">
               <h3>Invoice Overview</h3>
            </div>
            <div class="invoice-ov-content">
               <ul>
                  <li>
                     <div class="io-dot black">
                        <span></span>
                     </div>
                     <div class="">
                        <h6>$380.00</h6>
                        <p>Unsend</p>
                     </div>
                  </li>
                  <li>
                     <div class="io-dot grey">
                        <span></span>
                     </div>
                     <div class="">
                        <h6>$380.00</h6>
                        <p>Draft</p>
                     </div>
                  </li>
                  <li>
                     <div class="io-dot blue">
                        <span></span>
                     </div>
                     <div class="">
                        <h6>$380.00</h6>
                        <p>Sent</p>
                     </div>
                  </li>
                  <li>
                     <div class="io-dot yellow">
                        <span></span>
                     </div>
                     <div class="">
                        <h6>$380.00</h6>
                        <p>Partial</p>
                     </div>
                  </li>
                  <li>
                     <div class="io-dot red">
                        <span></span>
                     </div>
                     <div class="">
                        <h6>$380.00</h6>
                        <p>Overdue</p>
                     </div>
                  </li>
                  <li>
                     <div class="io-dot green">
                        <span></span>
                     </div>
                     <div class="">
                        <h6>$380.00</h6>
                        <p>Paid</p>
                     </div>
                  </li>
               </ul>
            </div>
         </div>

         <div class="admin-white-box mt-4">
           
            <div class="row">
               <div class="col-lg-12">
                  <div class="common-table-wrapper mt-0">
                     <div class="table-responsive">
                        <table class="table">
                           <thead>
                              <tr>
                                 <th>&nbsp;</th>
                                 <th>Number</th>
                                 <th>Contact</th>
                                 <th>Case</th>
                                 <th>Total</th>
                                 <th>Paid</th>
                                 <th>Amount due</th>
                                 <th>Due</th>
                                 <th>Created</th>
                                 <th>Status</th>
                                 <th>Viewed</th>
                                 <th> &nbsp; </th>
                              </tr>
                           </thead>
                           <tbody>
                              <tr>
                                 <td>
                                   <button class="btn view-btn-tb">View</button>
                                 </td>
                                 <td>
                                    <h5>0010100</h5>
                                 </td>
                                 <td>
                                    <h5>Vaibhav Jagtap</h5>
                                 </td>
                                 <td>
                                    <h6>John den matter</h6>
                                 </td>
                                 <td>
                                    <h6>$3490</h6>
                                 </td>
                                 <td>
                                    <h6>$700</h6>
                                 </td>
                                 <td>
                                    <h6>$1000</h6>
                                 </td>
                                 <td>
                                    <h6>—-</h6>
                                 </td>
                                 <td>
                                    <h6>22 Sept 2021</h6>
                                 </td>
                                 <td>
                                    <h6>Unsent</h6>
                                 </td>
                                 <td>
                                    <h6>Never</h6>
                                 </td>
                                 <td>
                                    <div class="action-btn-group">
                                       <button class="btn" type="button"><img src="/assets/img/dollar-icon.png" alt=""/></button>
                                       <button class="btn" type="button"><img src="/assets/img/delete-icon.png" alt=""/></button>
                                    </div>
                                 </td>
                              </tr>

                              <tr>
                                 <td>
                                   <button class="btn view-btn-tb">View</button>
                                 </td>
                                 <td>
                                    <h5>0010100</h5>
                                 </td>
                                 <td>
                                    <h5>Vaibhav Jagtap</h5>
                                 </td>
                                 <td>
                                    <h6>John den matter</h6>
                                 </td>
                                 <td>
                                    <h6>$3490</h6>
                                 </td>
                                 <td>
                                    <h6>$700</h6>
                                 </td>
                                 <td>
                                    <h6>$1000</h6>
                                 </td>
                                 <td>
                                    <h6>—-</h6>
                                 </td>
                                 <td>
                                    <h6>22 Sept 2021</h6>
                                 </td>
                                 <td>
                                    <h6>Unsent</h6>
                                 </td>
                                 <td>
                                    <h6>Never</h6>
                                 </td>
                                 <td>
                                    <div class="action-btn-group">
                                       <button class="btn" type="button"><img src="/assets/img/dollar-icon.png" alt=""/></button>
                                       <button class="btn" type="button"><img src="/assets/img/delete-icon.png" alt=""/></button>
                                    </div>
                                 </td>
                              </tr>

                              <tr>
                                 <td>
                                   <button class="btn view-btn-tb">View</button>
                                 </td>
                                 <td>
                                    <h5>0010100</h5>
                                 </td>
                                 <td>
                                    <h5>Vaibhav Jagtap</h5>
                                 </td>
                                 <td>
                                    <h6>John den matter</h6>
                                 </td>
                                 <td>
                                    <h6>$3490</h6>
                                 </td>
                                 <td>
                                    <h6>$700</h6>
                                 </td>
                                 <td>
                                    <h6>$1000</h6>
                                 </td>
                                 <td>
                                    <h6>—-</h6>
                                 </td>
                                 <td>
                                    <h6>22 Sept 2021</h6>
                                 </td>
                                 <td>
                                    <h6>Unsent</h6>
                                 </td>
                                 <td>
                                    <h6>Never</h6>
                                 </td>
                                 <td>
                                    <div class="action-btn-group">
                                       <button class="btn" type="button"><img src="/assets/img/dollar-icon.png" alt=""/></button>
                                       <button class="btn" type="button"><img src="/assets/img/delete-icon.png" alt=""/></button>
                                    </div>
                                 </td>
                              </tr>

                              <tr>
                                 <td>
                                   <button class="btn view-btn-tb">View</button>
                                 </td>
                                 <td>
                                    <h5>0010100</h5>
                                 </td>
                                 <td>
                                    <h5>Vaibhav Jagtap</h5>
                                 </td>
                                 <td>
                                    <h6>John den matter</h6>
                                 </td>
                                 <td>
                                    <h6>$3490</h6>
                                 </td>
                                 <td>
                                    <h6>$700</h6>
                                 </td>
                                 <td>
                                    <h6>$1000</h6>
                                 </td>
                                 <td>
                                    <h6>—-</h6>
                                 </td>
                                 <td>
                                    <h6>22 Sept 2021</h6>
                                 </td>
                                 <td>
                                    <h6>Unsent</h6>
                                 </td>
                                 <td>
                                    <h6>Never</h6>
                                 </td>
                                 <td>
                                    <div class="action-btn-group">
                                       <button class="btn" type="button"><img src="/assets/img/dollar-icon.png" alt=""/></button>
                                       <button class="btn" type="button"><img src="/assets/img/delete-icon.png" alt=""/></button>
                                    </div>
                                 </td>
                              </tr>

                              <tr>
                                 <td>
                                   <button class="btn view-btn-tb">View</button>
                                 </td>
                                 <td>
                                    <h5>0010100</h5>
                                 </td>
                                 <td>
                                    <h5>Vaibhav Jagtap</h5>
                                 </td>
                                 <td>
                                    <h6>John den matter</h6>
                                 </td>
                                 <td>
                                    <h6>$3490</h6>
                                 </td>
                                 <td>
                                    <h6>$700</h6>
                                 </td>
                                 <td>
                                    <h6>$1000</h6>
                                 </td>
                                 <td>
                                    <h6>—-</h6>
                                 </td>
                                 <td>
                                    <h6>22 Sept 2021</h6>
                                 </td>
                                 <td>
                                    <h6>Unsent</h6>
                                 </td>
                                 <td>
                                    <h6>Never</h6>
                                 </td>
                                 <td>
                                    <div class="action-btn-group">
                                       <button class="btn" type="button"><img src="/assets/img/dollar-icon.png" alt=""/></button>
                                       <button class="btn" type="button"><img src="/assets/img/delete-icon.png" alt=""/></button>
                                    </div>
                                 </td>
                              </tr>

                              <tr>
                                 <td>
                                   <button class="btn view-btn-tb">View</button>
                                 </td>
                                 <td>
                                    <h5>0010100</h5>
                                 </td>
                                 <td>
                                    <h5>Vaibhav Jagtap</h5>
                                 </td>
                                 <td>
                                    <h6>John den matter</h6>
                                 </td>
                                 <td>
                                    <h6>$3490</h6>
                                 </td>
                                 <td>
                                    <h6>$700</h6>
                                 </td>
                                 <td>
                                    <h6>$1000</h6>
                                 </td>
                                 <td>
                                    <h6>—-</h6>
                                 </td>
                                 <td>
                                    <h6>22 Sept 2021</h6>
                                 </td>
                                 <td>
                                    <h6>Unsent</h6>
                                 </td>
                                 <td>
                                    <h6>Never</h6>
                                 </td>
                                 <td>
                                    <div class="action-btn-group">
                                       <button class="btn" type="button"><img src="/assets/img/dollar-icon.png" alt=""/></button>
                                       <button class="btn" type="button"><img src="/assets/img/delete-icon.png" alt=""/></button>
                                    </div>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                     </div>
                  </div>
               </div>
            </div>
         </div>


     </div>
   </section>
        </>
    );
};

export default ViewInvoices;
