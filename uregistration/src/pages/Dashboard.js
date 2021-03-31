import React, { Component } from 'react';
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Sidebar from '../components/Sidebar';
import dashboardService from '../services/dashboardService';


class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ['Ins', 'FB', 'YT', 'TW', 'TK', 'WS', 'UV', 'REF'],
                datasets: [
                    {
                        label: 'Successful',
                        data: [12, 19, 3, 5, 2, 3, 5, 4],
                        backgroundColor: 'rgb(245, 202, 63)',
                    },
                    {
                        label: 'Pending',
                        data: [2, 3, 20, 5, 1, 4, 8, 6],
                        backgroundColor: 'rgb(18, 197, 153)',
                    },

                ],


            },
            chartDatadoughnut: {
                labels: ['Instagram', 'Facebook', 'YouTube', 'Twitter', 'TikTok'],
                datasets: [
                    {

                        data: [12, 19, 3, 5, 2,],
                        backgroundColor: [
                            '#072448',
                            '#54d2d2',
                            '#ffcb00"',
                            '#ff6150',
                            '#f8aa4b',

                        ],
                        borderColor: [
                            '#072448',
                            '#54d2d2',
                            '#ffcb00"',
                            '#ff6150',
                            '#f8aa4b',
                        ],
                        borderWidth: 1,
                    },
                ],


            }, Linechart3: {
                labels: ['Jan', 'Feb', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
                datasets: [
                    {
                        label: 'No Of Users(Monthly)',
                        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        fill: false,
                        backgroundColor: '#ffe227',
                        borderColor: '#822659',
                    },
                ],


            }, Barchart4: {
                labels: ['Ins', 'FB', 'YT', 'TW', 'TK', 'WS', 'UV', 'REF'],
                datasets: [
                    {
                        label: 'No of Impressions',
                        data: [0, 0, 0, 0, 0, 0, 0, 0],
                        backgroundColor: 'rgb(245, 202, 63)',
                        backgroundColor: 'rgb(242, 202, 63)',
                        backgroundColor: 'rgb(245, 208, 63)',
                        backgroundColor: 'rgb(245, 202, 63)',
                    },


                ],


            },
            totalusers: 0,
            totalorder: 0,
            pendingorders: 0,
            pendingvideos: 0,
            topusers: []

        }
    }



    componentDidMount() {
        dashboardService.getTotalUsers().then(res => {
            this.setState({ totalusers: res.data });
        });

        dashboardService.getTotalOrders().then(res => {
            this.setState({ totalorder: res.data });
        });

        dashboardService.getPendingOrders().then(res => {
            this.setState({ pendingorders: res.data });
        });

        dashboardService.getPendingVideos().then(res => {
            this.setState({ pendingvideos: res.data });
        });

        dashboardService.getUserStatics().then(res => {
            this.setState({
                Linechart3: {
                    labels: res.data.months,
                    datasets: [
                        {
                            label: 'No Of Users(Monthly)',
                            data: res.data.usage,
                            fill: false,
                            backgroundColor: '#ffe227',
                            borderColor: '#822659',
                        },
                    ],
                }
            });
        });

        dashboardService.getEarningImpression().then(res => {
            this.setState({
                Barchart4: {
                    labels: res.data.months,
                    datasets: [
                        {
                            label: 'No of Impressions',
                            data: res.data.usage,
                            backgroundColor: 'rgb(245, 202, 63)',
                            backgroundColor: 'rgb(242, 202, 63)',
                            backgroundColor: 'rgb(245, 208, 63)',
                            backgroundColor: 'rgb(245, 202, 63)',
                        },


                    ],


                }
            });
        });

        dashboardService.getTopUsers().then(res => {
            this.setState({ topusers: res.data });
        });

        dashboardService.getOrderImpression().then(res => {
            this.setState({
                chartDatadoughnut: {
                    labels: res.data.months,
                    datasets: [
                        {

                            data: res.data.usage,
                            backgroundColor: [
                                '#072448',
                                '#54d2d2',
                                '#ffcb00"',
                                '#ff6150',
                                '#f8aa4b',

                            ],
                            borderColor: [
                                '#072448',
                                '#54d2d2',
                                '#ffcb00"',
                                '#ff6150',
                                '#f8aa4b',
                            ],
                            borderWidth: 1,
                        },
                    ],


                }
            });
        });
    }




    render() {

        return (
            <div>
                <Helmet>
                    <meta charset="utf-8" />
                    <meta http-equiv="x-ua-compatible" content="ie=edge" />
                    <title>Dashboard</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="stylesheet" type="text/css" href="/assetsadmin/css/css/util1.css" />
                    <link rel="stylesheet" type="text/css" href="/assetsadmin/css/css/main1.css" />
                    <link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css" />

                    <link rel="stylesheet" href="/assetsadmin/css/bootstrap.min.css" />
                    <link rel="stylesheet" href="/assetsadmin/css/font-awesome.min.css" />
                    <link rel="stylesheet" href="/assetsadmin/css/themify-icons.css" />
                    <link rel="stylesheet" href="/assetsadmin/css/metisMenu.css" />
                    <link rel="stylesheet" href="/assetsadmin/css/owl.carousel.min.css" />
                    <link rel="stylesheet" href="/assetsadmin/css/slicknav.min.css" />


                    <link rel="stylesheet" href="/assetsadmin/css/typography.css" />

                    <link rel="stylesheet" href="/assetsadmin/css/styles.css" />
                    <link rel="stylesheet" href="/assetsadmin/css/responsive.css" />
                    <script src="/assetsadmin/js/vendor/modernizr-2.8.3.min.js"></script>

                    <script src="/assetsadmin/js/vendor/jquery-2.2.4.min.js"></script>
                    <script src="/assetsadmin/js/popper.min.js"></script>
                    <script src="/assetsadmin/js/bootstrap.min.js"></script>
                    <script src="/assetsadmin/js/owl.carousel.min.js"></script>
                    <script src="/assetsadmin/js/metisMenu.min.js"></script>
                    <script src="/assetsadmin/js/jquery.slimscroll.min.js"></script>
                    <script src="/assetsadmin/js/jquery.slicknav.min.js"></script>


                    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.min.js"></script>
                    <script src="https://code.highcharts.com/highcharts.js"></script>
                    <script src="https://code.highcharts.com/modules/exporting.js"></script>
                    <script src="https://code.highcharts.com/modules/export-data.js"></script>

                    <script src="https://www.amcharts.com/lib/3/ammap.js"></script>
                    <script src="https://www.amcharts.com/lib/4/core.js"></script>
                    <script src="https://www.amcharts.com/lib/4/maps.js"></script>
                    <script src="https://www.amcharts.com/lib/3/maps/js/worldLow.js"></script>


                    <script src="/assetsadmin/js/maps.js"></script>

                    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.19/css/jquery.dataTables.css" />
                    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.18/css/dataTables.bootstrap4.min.css" />
                    <link rel="stylesheet" type="text/css"
                        href="https://cdn.datatables.net/responsive/2.2.3/css/responsive.bootstrap.min.css" />
                    <link rel="stylesheet" type="text/css"
                        href="https://cdn.datatables.net/responsive/2.2.3/css/responsive.jqueryui.min.css" />



                </Helmet>
                <Sidebar />

                <div id="preloader">
                    <div className="loader"></div>
                </div>
                { /* <!-- preloader area end -->
    <!-- page container area start -->*/}
                <div className="page-container">


                    {/* <!-- main content area start --> */}
                    <div className="main-content">
                        {/* <!-- header area start --> */}
                        <br />
                        <div className="page-title-area">
                            <div className="row align-items-center">
                                <div className="col-sm-6">
                                    <div className="breadcrumbs-area clearfix">
                                        <h4 className="page-title pull-left">Dashboard</h4>
                                        <ul className="breadcrumbs pull-left">
                                            <li> <Link to="/admin/admindash" > <a >Home</a> </Link></li>
                                            <li><span>Dashboard</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- page title area end --> */}

                        <div className="main-content-inner">
                            <div className="row">
                                {/* <!-- seo fact area start --> */}
                                <div className="col-lg-8">
                                    <div className="row">
                                        <div className="col-md-6 mt-5 mb-3">
                                            <div className="card">
                                                <div className="seo-fact sbg1">
                                                    <div className="p-4 d-flex justify-content-between align-items-center">
                                                        <div className="seofct-icon"><i className="ti-user"></i> Total Users</div>
                                                        <h2>{this.state.totalusers}</h2>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mt-md-5 mb-3">
                                            <div className="card">
                                                <div className="seo-fact sbg2">
                                                    <div className="p-4 d-flex justify-content-between align-items-center">
                                                        <div className="seofct-icon"><i className="ti-money"></i> Total Orders</div>
                                                        <h2>{this.state.totalorder}</h2>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3 mb-lg-0">
                                            <div className="card">
                                                <div className="seo-fact sbg3">
                                                    <div className="p-4 d-flex justify-content-between align-items-center">
                                                        <div className="seofct-icon"><i className="ti-package"></i> Pending Orders</div>
                                                        <h2>{this.state.pendingorders}</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3 mb-lg-0">
                                            <div className="card">
                                                <div className="seo-fact sbg4">
                                                    <div className="p-4 d-flex justify-content-between align-items-center">
                                                        <div className="seofct-icon"><i className="ti-video-camera"></i> Pending Videos</div>
                                                        <h2>{this.state.pendingvideos}</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- <div className="col-md-6">
                                <div className="card">
                                    <div className="seo-fact sbg4">
                                        <div className="p-4 d-flex justify-content-between align-items-center">
                                            <div className="seofct-icon">New Users</div>
                                            <canvas id="seolinechart4" height="60"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div> --> */}
                                    </div>
                                </div>
                                {/* <!-- seo fact area end -->
                    <!-- Social Campain area start --> */}
                                <div className="col-lg-4 mt-5">
                                    <div className="card h-full">
                                        <div className="card-body">
                                            <h4 className="header-title">Order Impressions</h4>
                                            <Doughnut
                                                data={this.state.chartDatadoughnut}
                                                options={{


                                                }}
                                            />

                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Social Campain area end -->
                    <!-- Statistics area start --> */}
                                <div className="col-lg-8 mt-5">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="header-title">User Statistics</h4>
                                            <div id="user-statistics">
                                                <Line
                                                    data={this.state.Linechart3}

                                                    options={{

                                                        scales: {
                                                            yAxes: [
                                                                {
                                                                    ticks: {
                                                                        beginAtZero: true,
                                                                    },
                                                                },
                                                            ],
                                                        },

                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Statistics area end -->
                    <!-- Advertising area start --> */}


                                {/* <!-- Top users area start --> */}
                                <div className="col-lg-4 mt-5">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="header-title">Top 10 Users</h4>
                                            <table className="dbkit-table">
                                                <tbody>
                                                    <tr className="heading-td">
                                                        <td>Email</td>
                                                        <td>Point</td>

                                                    </tr>
                                                    {this.state.topusers.map((data) => {
                                                        return (
                                                            <tr>
                                                                <td>{data.email}</td>
                                                                <td>{data.earn}</td>

                                                            </tr>
                                                        );
                                                    })}



                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Top users area end -->
                    
                                {/* <!-- Advertising area end --> */}
                                <div className="col-lg-12 mt-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="header-title">Earning Impressions</h4>
                                            <pre className="tab">Facebook Page Like-FPL | Facebook Page Like-FPL | Facebook Post Share-FPS | Youtube Subscribers-YT  </pre>
                                            <pre className="tab">Youtube Video Watch-YVW | Instagram Followers-IF | Twitter Followers-TF | TikTok Followers-TF </pre>
                                            <pre className="tab">Profile Completion -PS | Video Upload-VU | Referrals-R | Servey Filling-SF</pre>
                                            <pre className="tab"> </pre>

                                            <div id="ambarchart5">
                                                <Bar
                                                    data={this.state.Barchart4}

                                                    options={{


                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>







                                {/* <!-- map area start --> */}
                                {/* <div className="col-xl-5 col-lg-12 mt-5">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="header-title">Marketing Area</h4>
                                            <div id="seomap"></div>
                                        </div>
                                    </div>
                                </div> */}


                            </div>
                        </div>
                    </div>
                    {/* <!-- main content area end -->
        <!-- footer area start--> */}

                </div>
                {/* <!-- page container area end -->
    <!-- offset area start --> */}






            </div>
        )
    }
}

export default Dashboard