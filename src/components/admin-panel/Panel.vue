<template>
    <body id="page-top">

    <!-- Page Wrapper -->
    <div id="wrapper">

        <!-- Sidebar -->
        <Sidebar/>
        <!-- End of Sidebar -->

        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">

            <!-- Main Content -->
            <div id="content">

                <!-- Topbar -->
                <Topbar/>
                <!-- End of Topbar -->

                <!-- Begin Page Content -->
                <router-view />
                <!-- /.container-fluid -->

            </div>
            <!-- End of Main Content -->

            <!-- Footer -->
            <Footer/>
            <!-- End of Footer -->

        </div>
        <!-- End of Content Wrapper -->

    </div>
    <!-- End of Page Wrapper -->

    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
    </a>

</body>
</template>

<script>
import Sidebar from './Sidebar.vue'
import Footer from './Footer.vue'
import Topbar from './Topbar.vue'
export default {
  name: 'Panel',
  components: {
      Sidebar,
      Footer,
      Topbar
  }
}
</script>