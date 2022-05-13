import React from "react";

const Container = () => {
    return(
        <div class="container-fluid ">
            <div class="container ctn-body">
                <div class="row">
                    <div class="col-8 pr-10">
                        <div class="row">
                            <h1 class="head-body">Phân tách từ</h1>
                            
                        </div>
                        <hr/>
                        {/* Input */}
                        <div class="row">
                            <div class="col-8">
                                <form class="was-validated ">
                                    <div class="mb-3">
                                        <label for="validationTextarea" class="form-label">Nhập text cần phân tách</label>
                                        <textarea class="form-control is-invalid ctl-form-in" id="validationTextarea" placeholder="Nhập ở đây!" required></textarea>
                                        
                                    </div>
                                    <div class="mb-3">
                                        <button class="btn btn-primary" type="submit">Phân tách</button>
                                    </div>
                                </form>
                            </div>
                            <div class="col-4">
                                <div class="list-group mt-30">
                                    <button type="button" class="list-group-item list-group-item-action active" disabled>
                                        Mẫu text
                                    </button>
                                    <button type="button" class="list-group-item list-group-item-action">A second item</button>
                                    <button type="button" class="list-group-item list-group-item-action">A third button item</button>
                                    <button type="button" class="list-group-item list-group-item-action">A fourth button item</button>
                                    <button type="button" class="list-group-item list-group-item-action" disabled>A disabled button item</button>
                                </div>
                            </div>
                        </div>
                        {/* Output */}
                            {/* readonly không cho phép người dùng chỉnh sửa thẻ input */}
                            <div class="form-output">
                                <h2>Kết quả phân tách</h2>
                                <div class="mb-3">
                                    <label for="formGroupExampleInput" class="form-label">Phường</label>
                                    <input type="text" class="form-control" id="formGroupExampleInput" readonly="readonly" value={"Phước Long A"} />
                                    </div>
                                    <div class="mb-3">
                                    <label for="formGroupExampleInput2" class="form-label">Quận</label>
                                    <input type="text" class="form-control" id="formGroupExampleInput2" readonly="readonly" value={"Quận 9"} />
                                    </div>
                                    <div class="mb-3">
                                    <label for="formGroupExampleInput2" class="form-label">Tỉnh</label>
                                    <input type="text" class="form-control" id="formGroupExampleInput2" readonly="readonly" value={"Hồ Chí Minh"} />
                                </div>
                            
                            </div>
                        
                    </div>
                    <div class="col-4 bon">
                        <div class="container card mt-3 ">
                            <div class="row form-header mb-2">
                                <h2 >Đăng nhập</h2>
                            </div>
                            <div class="row form-body">
                                <form>
                                    <div class="mb-2">
                                                <label for="formGroupExampleInput" class="form-label">Tài khoản</label>
                                                <input type="text" class="form-control" id="formGroupExampleInput" />
                                            </div>
                                            <div class="mb-2">
                                                <label for="formGroupExampleInput2" class="form-label">Mật khẩu</label>
                                                <input type="text" class="form-control" id="formGroupExampleInput2"  />
                                            </div>
                                            
                                            <fieldset class="row mb-2">
                                                <div class="col-sm-10">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" id="gridCheck1" />
                                                        <label class="form-check-label" for="gridCheck1">
                                                        Ghi nhớ
                                                        </label>
                                                    </div>
                                                </div>
                                            </fieldset>
                                            <button type="submit" class="btn btn-primary mb-2">Đăng nhập</button>
                                            <a href="#" class="form-dangky btn-right">Đăng ký tài khoản?</a>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                      
                </div>
            </div>

    )
};

export default Container;