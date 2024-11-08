<template>
    <div class="chat-wrapper my-5">
        <div class="chat-sidebar">
            <div class="chat-sidebar-content">
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-Chats">
                        <div class="chat-list">
                            <div class="list-group list-group-flush">
                                <a href="javascript:;" class="list-group-item">
                                    <div class="d-flex">
                                        <div class="chat-user-online">
                                            <img src="../../../assets/images/avatars/avatar-2.png" width="42"
                                                height="42" class="rounded-circle" alt="" />
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <h6 class="mb-0 chat-title">Louis Litt</h6>
                                            <p class="mb-0 chat-msg">You just got LITT up, Mike.</p>
                                        </div>
                                        <div class="chat-time">9:51 AM</div>
                                    </div>
                                </a>
                                <a href="javascript:;" class="list-group-item active">
                                    <div class="d-flex">
                                        <div class="chat-user-online">
                                            <img src="../../../assets/images/avatars/avatar-3.png" width="42"
                                                height="42" class="rounded-circle" alt="" />
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <h6 class="mb-0 chat-title">Harvey Specter</h6>
                                            <p class="mb-0 chat-msg">Wrong. You take the gun....</p>
                                        </div>
                                        <div class="chat-time">4:32 PM</div>
                                    </div>
                                </a>
                                <a href="javascript:;" class="list-group-item">
                                    <div class="d-flex">
                                        <div class="chat-user-online">
                                            <img src="../../../assets/images/avatars/avatar-4.png" width="42"
                                                height="42" class="rounded-circle" alt="" />
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <h6 class="mb-0 chat-title">Rachel Zane</h6>
                                            <p class="mb-0 chat-msg">I was thinking that we could...</p>
                                        </div>
                                        <div class="chat-time">Wed</div>
                                    </div>
                                </a>
                                <a href="javascript:;" class="list-group-item">
                                    <div class="d-flex">
                                        <div class="chat-user-online">
                                            <img src="../../../assets/images/avatars/avatar-5.png" width="42"
                                                height="42" class="rounded-circle" alt="" />
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <h6 class="mb-0 chat-title">Donna Paulsen</h6>
                                            <p class="mb-0 chat-msg">Mike, I know everything!</p>
                                        </div>
                                        <div class="chat-time">Tue</div>
                                    </div>
                                </a>
                                <a href="javascript:;" class="list-group-item">
                                    <div class="d-flex">
                                        <div class="chat-user-online">
                                            <img src="../../../assets/images/avatars/avatar-6.png" width="42"
                                                height="42" class="rounded-circle" alt="" />
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <h6 class="mb-0 chat-title">Jessica Pearson</h6>
                                            <p class="mb-0 chat-msg">Have you finished the draft...</p>
                                        </div>
                                        <div class="chat-time">9/3/2020</div>
                                    </div>
                                </a>
                                <a href="javascript:;" class="list-group-item">
                                    <div class="d-flex">
                                        <div class="chat-user-online">
                                            <img src="../../../assets/images/avatars/avatar-7.png" width="42"
                                                height="42" class="rounded-circle" alt="" />
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <h6 class="mb-0 chat-title">Harold Gunderson</h6>
                                            <p class="mb-0 chat-msg">Thanks Mike! :)</p>
                                        </div>
                                        <div class="chat-time">12/3/2020</div>
                                    </div>
                                </a>
                                <a href="javascript:;" class="list-group-item">
                                    <div class="d-flex">
                                        <div class="chat-user-online">
                                            <img src="../../../assets/images/avatars/avatar-9.png" width="42"
                                                height="42" class="rounded-circle" alt="" />
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <h6 class="mb-0 chat-title">Katrina Bennett</h6>
                                            <p class="mb-0 chat-msg">I've sent you the files for...</p>
                                        </div>
                                        <div class="chat-time">16/3/2020</div>
                                    </div>
                                </a>
                                <a href="javascript:;" class="list-group-item">
                                    <div class="d-flex">
                                        <div class="chat-user-online">
                                            <img src="../../../assets/images/avatars/avatar-10.png" width="42"
                                                height="42" class="rounded-circle" alt="" />
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <h6 class="mb-0 chat-title">Charles Forstman</h6>
                                            <p class="mb-0 chat-msg">Mike, this isn't over.</p>
                                        </div>
                                        <div class="chat-time">18/3/2020</div>
                                    </div>
                                </a>
                                <a href="javascript:;" class="list-group-item">
                                    <div class="d-flex">
                                        <div class="chat-user-online">
                                            <img src="../../../assets/images/avatars/avatar-11.png" width="42"
                                                height="42" class="rounded-circle" alt="" />
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <h6 class="mb-0 chat-title">Jonathan Sidwell</h6>
                                            <p class="mb-0 chat-msg">That's bullshit. This deal..</p>
                                        </div>
                                        <div class="chat-time">24/3/2020</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="chat-header d-flex align-items-center">
            <div class="chat-toggle-btn"><i class='bx bx-menu-alt-left'></i>
            </div>
        </div> -->
        <div class="chat-content" id="chatContent">
            <div class="chat-content-leftside">
                <div class="d-flex">
                    <img src="../../../assets/images/avatars/avatar-3.png" width="48" height="48" class="rounded-circle"
                        alt="" />
                    <div class="flex-grow-1 ms-2">
                        <p class="mb-0 chat-time">Harvey, 2:35 PM</p>
                        <p class="chat-left-msg">Hi, harvey where are you now a days?</p>
                    </div>
                </div>
            </div>
            <template v-for="(v, k) in list" :key="k">
                <div class="chat-content-rightside">
                    <div class="d-flex ms-auto">
                        <div class="flex-grow-1 me-2">
                            <p class="mb-0 chat-time text-end">you, 2:37 PM</p>
                            <p class="chat-right-msg">{{ v.title }}</p>
                        </div>
                    </div>
                </div>
            </template>
        </div>
        <div class="chat-footer d-flex align-items-center">
            <div class="flex-grow-1 pe-2">
                <div class="input-group"> 
                    <input type="text" class="form-control" placeholder="Type a message">
                </div>
            </div>
            <div class="chat-footer-menu"> 
                <button class="btn btn-primary">Gửi</button>
            </div>
        </div>
        <!--start chat overlay-->
        <div class="overlay chat-toggle-btn-mobile"></div>
        <!--end chat overlay-->
    </div>
</template>
<script>

export default {
    data() {
        return {
            list: [
                { title: 1 },
                { title: 2 },
            ],
        }
    },
    mounted() {
        new PerfectScrollbar(document.querySelector('.chat-list'));
        new PerfectScrollbar(document.querySelector('.chat-content'));
        setInterval(() => {
            this.list.push({
                title: (Math.random() + 1).toString(36).substring(7)
            });
            this.$nextTick(() => {
                this.scrollToBottom();
            });
        }, 5000);
    },
    methods: {
        scrollToBottom() {
            const chatContent = document.getElementById('chatContent');
            chatContent.scrollTop = chatContent.scrollHeight;
        },
    },  
}
</script>
<style></style>