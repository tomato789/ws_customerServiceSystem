<template>
    <div class="message-list">
        <div class="message" :class="[item.position == 'left' ? 'left' : 'right']"
            v-for="(item, index) in currentUser.messageList" :key="index">
            <template v-if="item.position == 'left'">
                <div>
                    <span class="name">{{ currentUser.name }}</span>
                    <span>{{ item.createTime }}</span>
                </div>
                <div>
                    <el-avatar :src="currentUser.avatar" />
                    <template v-if="item.messageType == 1">
                        <div>{{ item.messageText }}</div>
                    </template>
                    <template v-if="item.messageType == 2">
                        <div class="image">
                            <el-image :src="item.imageUrl" alt="" style="width: 60px;height: 60px;"
                                :preview-src-list="[item.imageUrl]" />
                        </div>
                    </template>
                    <template v-if="item.messageType == 3">
                        <div class="voice" @click="playVoice(item)">
                            <div class="bg" :ref="el => setVoiceRef(el, item.id)"></div>
                            <!-- 10秒 -->
                        </div>
                    </template>
                    <template v-if="item.messageType == 4">
                        <div class="video" @click="playVideo(item)">
                            <el-image :src="item.previewImageUrl" alt="" style="width: 60px;height: 60px;" />
                            <div class="bg">
                                <img :src="vudeoPlay" alt="">
                            </div>
                        </div>
                    </template>
                </div>
            </template>
            <template v-else-if="item.position == 'right'">
                <div>
                    <span>{{ item.createTime }}</span>
                    <span class="name">{{ loginUser.name }}</span>
                </div>
                <div>
                    <template v-if="item.messageType == 1">
                        <div>{{ item.messageText }}</div>
                    </template>
                    <template v-if="item.messageType == 2">
                        <div class="image">
                            <el-image :src="item.imageUrl" alt="" style="width: 60px;height: 60px;"
                                :preview-src-list="[item.imageUrl]" />
                        </div>
                    </template>
                    <template v-if="item.messageType == 3">
                        <div class="voice" @click="playVoice(item)">
                            <div class="bg" :ref="el => setVoiceRef(el, item.id)"></div>
                        </div>
                    </template>
                    <template v-if="item.messageType == 4">
                        <div class="video" @click="playVideo(item)">
                            <el-image :src="item.previewImageUrl" alt="" style="width: 60px;height: 60px;" />
                            <div class="bg">
                                <img :src="vudeoPlay" alt="">
                            </div>
                        </div>
                    </template>
                    <el-avatar :src="loginUser.avatar" />
                </div>
            </template>
        </div>
        <!-- <template v-else>
            <div class="empty-message">
                <el-empty description="暂无消息" style="margin-top: -100px;"></el-empty>
            </div>
        </template> -->
        <el-dialog v-model="visible" width="500" top="5vh" destroy-on-close>
            <div ref="videoContainerRef">

            </div>
            <!-- <template #footer>
                <div class="dialog-footer">
                    <el-button @click="submitForm" type="primary">确 定</el-button>
                    <el-button @click="visible = false">关 闭</el-button>
                </div>
            </template> -->
        </el-dialog>
    </div>
</template>

<script lang="ts" setup>
import vudeoPlay from '@/assets/images/video_play.png';
import { ref } from "vue";

const voiceRefList = ref<any[]>([]);
let visible = ref(false);
const videoContainerRef = ref();
const loginUser = ref({
    name: '客服人员1',
    avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
})



interface Message {
    name: string,
    avatar: string,
    messageList: Array<MessageItem>
}

interface MessageItem {
    id: number,
    position: string,
    createTime: string,
    messageText: string,
    messageType: number,
    imageUrl?: string,
    audioUrl?: string,
    videoUrl?: string,
    previewImageUrl?: string,
}

enum MessageType {
    TEXT = 1,
    IMAGE = 2,
    AUDIO = 3,
    VIODE = 4,
}

const currentUser = ref<Message>({
    name: '测试用户',
    avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    messageList: [
        {
            id: 1,
            position: 'left',
            createTime: '2021-09-01 12:00:00',
            messageText: '你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好',
            messageType: 1
        },
        {
            id: 2,
            position: 'right',
            createTime: '2021-09-01 12:00:00',
            messageText: '你好',
            messageType: 1,
        },
        {
            id: 3,
            position: 'left',
            createTime: '2021-09-01 12:00:00',
            messageText: '你好',
            messageType: 2,
            imageUrl: 'http://8.217.250.68:36076/pic/16474989451/20240603/171738720863263.jpg',
        },
        {
            id: 4,
            position: 'right',
            createTime: '2021-09-01 12:00:00',
            messageText: '你好',
            messageType: 2,
            imageUrl: 'http://8.217.250.68:36076/pic/16474989451/20240603/171738720863263.jpg',
        },
        {
            id: 5,
            position: 'left',
            createTime: '2021-09-01 12:00:00',
            messageText: '你好',
            messageType: 3,
            audioUrl: 'http://8.217.250.68:36076/mp3/20240603/665c9b5a64ac2.mp3',
        },
        {
            id: 6,
            position: 'left',
            createTime: '2021-09-01 12:00:00',
            messageText: '你好',
            messageType: 4,
            videoUrl: 'http://8.217.250.68:36076/mp4/20240603/171738807234700.mp4',
            previewImageUrl: 'http://8.217.250.68:36076/pic/16474989451/20240603/171734518885830.jpg'
        },
        {
            id: 7,
            position: 'right',
            createTime: '2021-09-01 12:00:00',
            messageText: '你好',
            messageType: 3,
            audioUrl: 'http://8.217.250.68:36076/mp3/20240603/665c9b5a64ac2.mp3',
        },
        {
            id: 8,
            position: 'right',
            createTime: '2021-09-01 12:00:00',
            messageText: '你好',
            messageType: 4,
            videoUrl: 'http://8.217.250.68:36076/mp4/20240603/171738807234700.mp4',
            previewImageUrl: 'http://8.217.250.68:36076/pic/16474989451/20240603/171734518885830.jpg'
        },
        {
            id: 9,
            position: 'left',
            createTime: '2021-09-01 12:00:00',
            messageText: '你好',
            messageType: 1
        },
        {
            id: 10,
            position: 'left',
            createTime: '2021-09-01 12:00:00',
            messageText: '你好',
            messageType: 1
        },
        {
            id: 11,
            position: 'right',
            createTime: '2021-09-01 12:00:00',
            messageText: '你好',
            messageType: 1
        },
        {
            id: 12,
            position: 'right',
            createTime: '2021-09-01 12:00:00',
            messageText: '你好',
            messageType: 1
        },
    ]
})

const setVoiceRef = (el: any, id: any) => {
    if (el) {
        voiceRefList.value.push({ el, id });
    }
}

const playVoice = (item: MessageItem) => {
    let cur = voiceRefList.value.find(v => { return v.id == item.id });
    // console.log(voiceRefList.value)
    if (cur) {
        cur.el.classList.add('voicePlay');
        let audio = new Audio(item.audioUrl);
        audio.play();
        audio.onended = () => {
            cur.el.classList.remove('voicePlay');
        }
    }
}

const playVideo = (item: MessageItem) => {
    visible.value = true;
    setTimeout(() => {
        let video = document.createElement('video');
        video.src = item.videoUrl;
        video.controls = true;
        video.autoplay = true;
        console.log(videoContainerRef)
        videoContainerRef.value.appendChild(video);
    }, 50)
    // 
}

</script>

<style scoped lang="scss">
.message-list {
    flex: 1;
    border: 1px solid #ddd;
    border-bottom: none;
    overflow: auto;
    // display: flex;
    // justify-content: space-between;
    // padding: 12px;

    .message {
        padding: 6px 18px;
    }

    >.left {
        text-align: left;

        .name {
            margin-right: 6px;
        }

        >div:nth-child(1) {
            // margin-left: 40px;
            color: #999;
            margin-bottom: 4px;
            font-size: 12px;
        }

        >div:nth-child(2) {
            display: flex;
            align-items: flex-start;

            >span:nth-child(1) {
                width: 32px;
                height: 32px;
                margin-right: 12px;
                line-height: 32px;
                vertical-align: middle;
                flex-shrink: 0;
            }

            >div:nth-child(2):not(.image):not(.video) {
                background: #ddd;
                padding: 6px 14px;
                border-radius: 4px;
                max-width: 45%;
                line-height: 1.5;
                word-break: break-all;
                font-size: 12px;
                position: relative;

                &:before {
                    content: "";
                    position: absolute;
                    top: 9px;
                    left: -6px;
                    border-right: solid 6px #ddd;
                    border-top: solid 6px transparent;
                    border-bottom: solid 6px transparent;
                }
            }
        }
    }

    >.right {
        text-align: right;

        .name {
            margin-left: 6px;
        }

        >div:nth-child(1) {
            // margin-right: 40px;
            color: #999;
            margin-bottom: 2px;
            font-size: 12px;
        }

        >div:nth-child(2) {
            display: flex;
            align-items: flex-start;
            justify-content: flex-end;

            >span:nth-child(2) {
                width: 32px;
                height: 32px;
                line-height: 32px;
                margin-left: 12px;
                vertical-align: middle;
            }

            >div:nth-child(1):not(.image):not(.video) {
                background: #0096ff;
                padding: 6px 14px;
                border-radius: 4px;
                max-width: 50%;
                line-height: 1.5;
                color: #fff;
                text-align: left;
                word-break: break-all;
                font-size: 12px;
                position: relative;


                &:before {
                    content: "";
                    position: absolute;
                    top: 9px;
                    right: -6px;
                    border-left: solid 6px #0096ff;
                    border-top: solid 6px transparent;
                    border-bottom: solid 6px transparent;
                }

            }
        }
    }
}

.voice {

    width: 120px;

    cursor: pointer;

    .bg {
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAYCAYAAAAF6fiUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzlFRDZDRDNENzlFMTFFNkJDN0NFMjA2QTFFRTRDQkIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzlFRDZDRDJENzlFMTFFNkJDN0NFMjA2QTFFRTRDQkIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTAxQkEzQ0RENzM2MTFFNjgyMEI5MTNDRkQ0OTM5QUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MTAxQkEzQ0VENzM2MTFFNjgyMEI5MTNDRkQ0OTM5QUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4K4iKVAAACUUlEQVR42uSazytEURTHvTHjR4kaU8xsSDZSdmbjx4oSK8XGQrJlpSwYTSmxEWWhUIpsZK3kD7DRNBuSBZFCNjZ+JPKcV6ecXu/d3sy7595bc+vbfXPue5/749z77o83lm3bZYYFC8RZqAbQAigP2tXNj5aZF7gdkAZNk9+7WvnOCCgxRUCb9n/o1sk3pUH6QDHF/GNsoM+QeYfiy6qkFeLZDBb0GlTB4AAR/xXT9nXxZVa0WCekQd9Y0HOJjg3CHySviiZmfjO3AyIhnu0gBc0wjAIR/wLtW8z87aAOWAI9gqaYRoAff4ZUoi7EKCiUP462j4CdSCrfK4N1Ahpi6I0i/hPa50M4oFB+Dbm/SzXfL5MD4rUogxP8+Itozynm59E+q5ovyuQdHxphWh568XvR5kxq1SEn40L4e0XMA1L4EcEe7RTjLqYdqRf/gezQUwr5LxjXq+aLHPCFcTmTA7z4tutIQhXfLiJPKXyRA/oxzgW8v9DgxU+S62eF/ATGr6r5fg26Corj9RHD4Z0fvwfjS9CbQn4bxrfK+R6TyzxZNk260solTL4i/g3al10TsMXIryA72T7VfK8MnJO8X9CKy14lafXjxx8jFUsSeyUzfxhtPwHPoqTy/TJJMJzJiPgNpJdsuNJizPwztB/q4JtwHN2KW3sn3HuMOouR30l6bbsOvgkOyGIBnaPbRldalJl/h2knuvgmOKAWNAFKMUz4Iv4O6Z1xXXxTPxtazHy6khnVyS/Fb8IDpHGyuvmWgX9L4Q4toDnQFWhNN/9PgAEAR4w1ULjdCbEAAAAASUVORK5CYII=) right 0 no-repeat;
        width: 20px;
        height: 20px;
        background-size: 400%;
    }

    .voicePlay {
        animation-name: voicePlay;
        animation-duration: 1s;
        animation-direction: normal;
        animation-iteration-count: infinite;
        animation-timing-function: steps(3);
    }

    @keyframes voicePlay {
        0% {
            background-position: 0;
        }

        100% {
            background-position: 100%;
        }
    }
}



.right {
    .voice {
        .bg {
            transform: rotate(180deg);
            float: right;
        }
    }
}

.video {
    position: relative;

    .bg {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        text-align: center;
        cursor: pointer;

        >img {
            margin-top: 14px;
            width: 30px;
            height: 30px;
        }
    }
}

:deep(.el-dialog__body) {
    height: 750px;

    video {
        width: 100%;
        height: 750px;
    }
}
</style>