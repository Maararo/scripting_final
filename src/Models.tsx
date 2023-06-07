import { type } from "os";

interface CarManufacturer {
    man_id: string;
    man_name: string;
    is_car: string;
    is_spec: string;
    is_moto: string;
}


interface Car {
    model_id: number;
    man_id: number;
    model_name: string;
    model_group: string;
    sort_order: number;
    cat_man_id: number;
    cat_model_id: number;
    cat_modif_id: number;
    is_car: boolean;
    is_moto: boolean;
    is_spec: boolean;
    show_in_salons: number;
    show_in_slider: number;
}

interface CarDetail {
    car_id: number;
    status_id: number;
    paid_add: number;
    photo: string;
    pic_number: number;
    prod_year: number;
    man_id: number;
    car_model: string;
    price: number;
    price_usd: number;
    price_value: number;
    fuel_type_id: number;
    gear_type_id: number;
    drive_type_id: number;
    door_type_id: number;
    car_run: number;
    car_run_km: number;
    car_run_dim: number;
    engine_volume: number;
    customs_passed: boolean;
    model_id: number;
    location_id: number;
    parent_loc_id: number;
    for_rent: boolean;
    currency_id: number;
    vehicle_type: number;
    category_id: number;
    car_desc: string;
    order_date: string;
    hp: 0;
    hours_used: 0;
    photo_ver: number;
    checked: boolean;
    lang_type_id: number;
    is_payd: boolean;
    condition_type_id: number;
    primary_damage_type: number;
    predicted_price: string;
    views: number;
}

interface Category {
    category_id: number;
    category_type: number;
    has_icon: number;
    title: string;
    seo_title: number;
    vehicle_types: Array<number>;
}

interface Response<T> {
    data: Array<T>;
}

interface PagingResponse<T> {
    statusCode: number;
    statusMessage: string;
    data: PagingData<T>;
}

interface PagingData<T> {
    items: Array<T>;
    meta: PagingInfo;
}

interface PagingInfo {
    total: number;
    per_page: number;
    current_page: number;
    last_page: number;
}

export type { CarManufacturer, Car, CarDetail, Response, PagingResponse, Category, PagingInfo };