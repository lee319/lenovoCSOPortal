<template>
    <div class='layout_home'>
        <Row style='background:#f8f8f9;'>
            <Col span='12' >
                <b><Icon type="ios-calendar" style='font-size:30px;'/>My Activities Today</b>
                <div class='layout_hr'></div>
                <p>No result found</p>
            </Col>
            <Col span='12'>
                <b><Icon type="md-clipboard" style='font-size:30px;'/>My Open Tasks</b>
                <div class='layout_hr'></div>
                <p>No result found</p>
            </Col>
            <Col span='12'>
                <b><Icon type="md-copy" style='font-size:30px;'/>Workflow Tasks</b>
                <div class='layout_hr'></div>
                <p>No result found</p>
            </Col>
            <Col span='12'>
                <b><Icon type="md-trending-down" style='font-size:30px;'/>Alerts</b>
                <div class='layout_hr'></div>
                <p>No result found</p>
            </Col>
            <Col span='12'>
                <b><Icon type="ios-browsers-outline" style='font-size:30px;'/>Dashboard</b>
                <div class='layout_hr'></div>
                <p>No Report available.Select your reports in Personalization</p>
            </Col>
            <Col span='12'>
                <b><Icon type="ios-browsers-outline" style='font-size:30px;'/>My Saved Searches</b>
                <div class='layout_hr'></div>
                <p>No result found</p>
            </Col>
        </Row>
    </div>
</template>

<script>
export default {
    name: 'home',
    data() {
        return {
    
        }
    }
}
</script>

<style scoped>
    p{
        width:100%;
        height:auto;
        background: #fff;
        padding:25px 5px;
    }
    .layout_hr{
        background:#2d8cf0;
        height:3px;
        width:100%;
        margin-top:10px;
    }
</style>