package com.stackroute.rabbitmq.domain;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class ProductDTO {
    @Id
    @JsonProperty("productId")
    private String productId;
    @JsonProperty("productName")
    private String productName;
    @JsonProperty("productType")
    private String productType;
    @JsonProperty("productTypeId")
    private String productTypeId;
    @JsonProperty("imageURL")
    private String imageURL;
    @JsonProperty("mrp")
    private String mrp;
    @JsonProperty("price")
    private String price;
    @JsonProperty("dimension")
    private String dimension;
    @JsonProperty("weight")
    private String weight;
    @JsonProperty("size")
    private String size;
    @JsonProperty("gender")
    private String gender;
    @JsonProperty("description")
    private String description;
    @JsonProperty("brand")
    private String brand;
    @JsonProperty("brandId")
    private String brandId;
    @JsonProperty("colour")
    private String colour;

    @Override
    public String toString() {
        return "ProductDTO{" +
                "productId=" + productId +
                ", productName='" + productName + '\'' +
                ", productType='" + productType + '\'' +
                ", productTypeId='" + productTypeId + '\'' +
                ", imageURL='" + imageURL + '\'' +
                ", mrp='" + mrp + '\'' +
                ", price='" + price + '\'' +
                ", dimension='" + dimension + '\'' +
                ", weight='" + weight + '\'' +
                ", size='" + size + '\'' +
                ", gender='" + gender + '\'' +
                ", description='" + description + '\'' +
                ", brand='" + brand + '\'' +
                ", brandId='" + brandId + '\'' +
                ", colour='" + colour + '\'' +
                '}';
    }
}
